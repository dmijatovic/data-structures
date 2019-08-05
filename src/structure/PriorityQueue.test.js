
import {PriorityQueue} from  './PriorityQueue'

describe('PriorityQueue data structure',()=>{
  let pq
  beforeEach(()=>{
    let tasks=[
      {prio:1,value:"Task with lowest prio"},
      {prio:2,value:"Task with moderate prio"},
      {prio:30,value:"Task with highest prio"},
      {prio:6,value:"Task with highest prio"},
    ]
    pq = new PriorityQueue()
    tasks.map(task=>{
      pq.add(task.prio,task.value)
    })
  })
  test('creates new PQ class',()=>{
    expect(pq).toBeTruthy()
  })
  test('inserted 4 tasks to the queue',()=>{
    let q = pq.getQueue()
    expect(q.length).toEqual(4)
  })
  test('takeHighestPrio() delivers task',()=>{
    let task = pq.takeHighestPrio()
    expect(task.value).toContain("highest prio")
    //console.log(task)
  })
  test('takeHighestPrio() removes task from queue',()=>{
    let task = pq.takeHighestPrio()
    let q = pq.getQueue()
    expect(q.length).toBe(3)
  })
})