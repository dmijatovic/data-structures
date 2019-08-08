/**
 * Undirected graph structure.
 * It holds nodeList. Each node keys keeps connections
 * Node = Vertex
 * Links = Edges
 */

import { PriorityQueue } from './PriorityQueue'

export class WeightedGraph{
  constructor(){
    this.nodeList={}
  }
  /**
   * Creates node in the graph ONLY if key does not exists
   * @param {String} key
   */
  newNode(key){
    if (!this.nodeList[key]){
      this.nodeList[key]=[]
    }
    return true
  }
  getNodes(){
    return this.nodeList
  }
  /**
   * Create link (edge) between two nodes.
   * The link is bidirectional.
   * @param {String} node1
   * @param {String} node2
   * @param {Number} weight
   */
  addLink(node1, node2, weight=null){
    //add node if it does not exists
    if (!this.nodeList[node1]){
      this.newNode(node1)
    }
    //add new link to node 1
    this.nodeList[node1].push({
      node:node2,
      weight
    })
    //add node 2 if not exists
    if (!this.nodeList[node2]){
      this.newNode(node2)
    }
    //add new link to node 2
    this.nodeList[node2].push({
      node:node1,
      weight
    })
    return true
  }
  /**
   * Removes link between two nodes in both arrays.
   * @param {String} node1
   * @param {String} node2
   */
  removeLink(node1,node2){
    if (this.nodeList[node1]){
      this.nodeList[node1] = this.nodeList[node1].filter(n=>n!==node2)
    }
    if (this.nodeList[node2]){
      this.nodeList[node2] = this.nodeList[node2].filter(n=>n!==node1)
    }
  }
  /**
   * Removes links for this node and the node itself.
   * @param {String} node
   */
  removeNode(node){
    if (this.nodeList[node]){
      this.nodeList[node].forEach(n=>{
        this.nodeList[n] = this.nodeList[n].filter(i=>{
          return i!==node
        })
      })

      delete this.nodeList[node]
    }
  }
  /**
   * Dijkstra algo is used to calculate shortest path from start
   * node to destination node. All possible paths are evaluated and
   * the one with lowest value (weight in this example) wins.
   * @param {string} start start point
   * @param {string} finish end point
   */
  shortestPath(start,finish){
    // graph nodes stored in priority queue based on weight
    //lowest weight first
    let nodes = new PriorityQueue("asc")
    //calculated distences from base node to each other "hop"
    let distances={}
    //per node stating previous hop
    let previous={}
    //shortest path from start to end node
    let path=[]
    // topNode at any moment of loop
    let topNode
    // counter to prevent endless while loop
    let count=0

    //init distances from as 0 and other to infinity
    //and add nodes to priority queue
    for (let node in this.nodeList){
      count++
      if (node === start){
        distances[start] = 0
        nodes.add(0, node)
      } else {
        distances[node] = Infinity
        nodes.add(Infinity, node)
      }
    }

    //console.log(distances)
    //console.log(nodes.takeHighestPrio())

    while(nodes.queue.length && count < 1000){
      //just a counter to stop while at max of 1000 hops
      count++
      topNode = nodes.takeHighestPrio()
      //console.log("topNode...", topNode)
      //if node is destination node
      if (topNode.value === finish){
        //we hit destination node
        //construct the path
        while(previous[finish]){
          path.push(finish)
          finish = previous[finish]
        }
        //abort loop
        break;
      }
      //find first node
      if (topNode){
        this.nodeList[topNode.value].forEach(nextNode=>{
          //calculate distance to nextNode
          let candidate=0
          //console.log("topNode nextNode...", nextNode)
          //console.log(`${nextNode.node}.weight...` , nextNode.weight)
          //console.log(`distances[${topNode.value}]...`, distances[topNode])

          //sum up distances at this point
          if(distances[topNode.value] && distances[topNode.value]!==Infinity){
            candidate = distances[topNode.value] + nextNode.weight
          } else {
            candidate = nextNode.weight
          }
          //console.log("candidate...", candidate)
          //if new distance is lower than current
          if (candidate < distances[nextNode.node]){
            //save new minimum distance
            distances[nextNode.node]=candidate
            //indicate route (each node defines previous step/hop)
            previous[nextNode.node] = topNode.value
            //add nextNode to queue with new distance value
            nodes.add(candidate,nextNode.node)
          }
        })
      }
    }
    //console.log("distances...",distances)
    //console.log("routes...", previous)
    //add start point and reverse order
    path = path.concat(start).reverse()
    //console.log("path...", path)
    //console.log(nodes.getQueue())
    return path
  }

}