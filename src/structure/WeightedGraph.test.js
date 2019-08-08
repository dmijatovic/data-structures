import {WeightedGraph} from './WeightedGraph'

describe ('WeightedGraph',()=>{
  let wg
  beforeEach(()=>{
    wg = new WeightedGraph()
  })
  test ('Add nodes and links with weight',()=>{
    //add nodes with weight
    wg.addLink("A","B",20)
    wg.addLink("A","C",10)
    wg.addLink("B","C",20)

    //we expect this
    let expected={
      A: [ { node: 'B', weight: 20 }, { node: 'C', weight: 10 } ],
      B: [ { node: 'A', weight: 20 }, { node: 'C', weight: 20 } ],
      C: [ { node: 'A', weight: 10 }, { node: 'B', weight: 20 } ]
    }
    let nodes = wg.getNodes()
    //console.log("nodes...",nodes)
    expect(nodes).toEqual(expected)
  })
})

describe('Dijkstra algo test',()=>{
  let wg
  beforeAll(()=>{
    wg = new WeightedGraph()
    wg.addLink("A","B",4)
    wg.addLink("A","C",2)
    wg.addLink("C","D",2)
    wg.addLink("B","E",3)
    wg.addLink("D","E",3)
    wg.addLink("C","F",4)
    wg.addLink("D","F",1)
    wg.addLink("F","E",1)
  })
  test('created test graph based on dummy data',()=>{
    let expected={
      A:[{node:"B",weight:4},{node:"C",weight:2}],
      B:[{node:"A",weight:4},{node:"E",weight:3}],
      C:[{node:"A",weight:2},{node:"D",weight:2},{node:"F",weight:4}],
      D:[{node:"C",weight:2},{node:"E",weight:3},{node:"F",weight:1}],
      E:[{node:"B",weight:3},{node:"D",weight:3},{node:"F",weight:1}],
      F:[{node:"C",weight:4},{node:"D",weight:1},{node:"E",weight:1}],
    }
    let data = wg.getNodes()
    //console.log(data)
    expect(data).toEqual(expected)
  })
  test('calculates shortest path from A to E',()=>{
    let path = wg.shortestPath("A","E")
    let expected = [ 'A', 'C', 'D', 'F', 'E' ]
    expect(path).toEqual(expected)
  })
})