
import { UndirectedGraph } from './Graph'

describe('Undirected graph',()=>{
  let ug
  beforeEach(()=>{
    ug = new UndirectedGraph()
  })
  test ('creates new node with key n1',()=>{
    expect(ug.newNode("n1")).toBe(true)
    let nodes = ug.getNodes()
    expect(nodes).toEqual({"n1":[]})
  })
  test('creates link between n1 an n2 nodes',()=>{
    let expected={
      n1:['n2'],
      n2:['n1']
    }
    //add node 1
    ug.newNode("n1")
    //add n2 node
    ug.newNode("n2")
    //add link
    ug.addLink("n1","n2")
    //get nodes
    let nodes=ug.getNodes()
    //console.log(nodes)
    expect(nodes).toEqual(expected)
  })
  test('remove link between n1 and n2',()=>{
    //add node 1
    ug.newNode("n1")
    //add n2 node
    ug.newNode("n2")
    //add link
    ug.addLink("n1","n2")
    //get nodes
    let nodes=ug.getNodes()
    //check added
    expect(nodes).toEqual({
      n1:['n2'],
      n2:['n1']
    })
    //remove link
    ug.removeLink("n1","n2")
    nodes=ug.getNodes()
    //check removed
    expect(nodes).toEqual({
      n1:[],
      n2:[]
    })
  })
  test('removes node 1 and all links',()=>{
    //add node 1
    ug.newNode("n1")
    //add n2 node
    ug.newNode("n2")
    //add n2 node
    ug.newNode("n3")
    //add link
    ug.addLink("n1","n2")
    ug.addLink("n1","n3")
    ug.addLink("n2","n3")
    //get nodes
    let nodes=ug.getNodes()
    //check added
    expect(nodes).toEqual({
      n1:['n2','n3'],
      n2:['n1','n3'],
      n3:['n1','n2']
    })
    //remove n1 node
    ug.removeNode("n1")
    nodes=ug.getNodes()
    //validate
    expect(nodes).toEqual({
      n2:['n3'],
      n3:['n2']
    })
  })
})

describe('Traversing graph',()=>{
  let ug = new UndirectedGraph()
  beforeAll(()=>{
    ug.newNode("A")
    ug.newNode("B")
    ug.newNode("C")
    ug.newNode("D")
    ug.newNode("E")
    ug.newNode("F")

    ug.addLink("A","B")
    ug.addLink("A","C")
    ug.addLink("B","D")
    ug.addLink("C","E")
    ug.addLink("D","E")
    ug.addLink("D","F")
    ug.addLink("E","F")
  })

  test('created expected test graph',()=>{
    let expected={
      "A":["B","C"],
      "B":["A","D"],
      "C":["A","E"],
      "D":["B","E","F"],
      "E":["C","D","F"],
      "F":["D","E"],
    }
    let graph = ug.getNodes()
    expect(graph).toEqual(expected)
  })

  test ('traverse path using DFS recursive',()=>{
    //start from A
    let expected = ["A","B","D","E","C","F"]
    let data = ug.dfsPathRecursive("A")
    expect(data).toEqual(expected)

    //start from D
    expected = ["D","B","A","C","E","F"]
    data = ug.dfsPathRecursive("D")
    expect(data).toEqual(expected)

  })

  test('traverse path using BFS loop',()=>{
    //start from A
    let expected = ["A","B","C","D","E","F"]
    let data = ug.bfsPath("A")
    expect(data).toEqual(expected)

    //start from D
    expected = ["D","B","E","F","A","C"]
    data = ug.bfsPath("D")
    expect(data).toEqual(expected)
  })

})