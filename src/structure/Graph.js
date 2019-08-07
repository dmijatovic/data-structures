/**
 * Undirected graph structure.
 * It holds nodeList. Each node keys keeps connections
 * Node = Vertex
 * Links = Edges
 */

export class UndirectedGraph{
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
   */
  addLink(node1,node2){
    if (this.nodeList[node1]){
      this.nodeList[node1].push(node2)
    } else {
      return false
    }
    if (this.nodeList[node2]){
      this.nodeList[node2].push(node1)
    } else {
      return false
    }
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
   * DepthFirst traversing the nodes path using recursion.
   * Depth first means we follow the link "down" trough nodes structure
   * rather than covering all routes from one node (breath first)
   * @param {String} nextNode
   * @param {Array} visited accumulated list of nodes in the order visited
   */
  dfsPathRecursive(nextNode,visited=[]){
    //console.log("nextNode...", nextNode)
    if (nextNode===null ||
      visited.indexOf(nextNode)!==-1){
      return visited
    }
    //console.log(`visited[${nextNode}]...false`)
    //save to list
    //nodes.push(nextNode)
    if (this.nodeList[nextNode]){
      //mark as visited to avoid circular reference
      visited.push(nextNode)

      this.nodeList[nextNode].forEach(node => {
        //console.log(`${nextNode} node item...`,item)
        visited = this.dfsPathRecursive(node,visited)
        //console.log(`${nextNode} visited received...`, visited)
      })
    }
    //console.log("nodes...", nodes)
    //console.log("visited list...", visited)
    return visited
  }
  /**
   * DepthFirst traverse using loop.
   * NOTE! this function does not produce completely
   * correct result. The order of traversing is slightly
   * different due to loop implementation. In my view
   * recursive function is better for DFS traverse
   * @param {String} startNode
   */
  dfsPathLoop(startNode){
    let visited=[]
    let stack=[]
    let count=0
    let currentNode

    stack.push(startNode)
    //visited.push(startNode)
    // console.log("stack1...", stack)
    // let currentNode = stack.shift()
    while(stack.length > 0 && count < 1000){
      count++
      currentNode = stack.shift()
      console.log('currentNode...', currentNode)
      console.log('current stack...', stack)

      if (visited.indexOf(currentNode)===-1){
        visited.push(currentNode)
      }

      console.log('visited...', visited)

      this.nodeList[currentNode].forEach(node=>{
        if (visited.indexOf(node)===-1){
          stack.push(node)
          //visited.push(node)
        }
      })

    }
    return visited
  }
  /**
   * Breath First traversing of undirected graph structure.
   * For each node we first examine all its connections before
   * we proceed to "next" level.
   * @param {*} startNode
   */
  bfsPath(startNode){
    let visited=[]
    let stack=[]
    let count=0
    let currentNode

    stack.push(startNode)
    //visited.push(startNode)
    // console.log("stack1...", stack)
    // let currentNode = stack.shift()
    while(stack.length > 0 && count < 1000){
      count++
      currentNode = stack.shift()
      //console.log('currentNode...', currentNode)
      //console.log('current stack...', stack)

      if (visited.indexOf(currentNode)===-1){
        visited.push(currentNode)
      }

      //console.log('visited...', visited)

      this.nodeList[currentNode].forEach(node=>{
        if (visited.indexOf(node)===-1){
          stack.push(node)
          //visited.push(node)
        }
      })

    }
    return visited
  }
}