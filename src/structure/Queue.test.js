
import {SimpleQueue, CustomQueue} from './Queue'
import { CodeGenerator } from '@babel/generator';

describe('Simple Queue FIFO approach',()=>{
  let sq
  beforeEach(()=>{
    sq = new SimpleQueue()
  })
  test ('add item to queue',()=>{
    let q = sq.add("item 1")
    expect(q).toEqual(['item 1'])
  })
  test ('remove first item from queue',()=>{
    sq.add('item 1')
    sq.add('item 2')
    let rem = sq.remove()
    expect(rem).toEqual('item 1')
  })
})

describe('Custom Queue list FIFO approach',()=>{
  let cq
  beforeEach(()=>{
    cq = new CustomQueue()
  })
  test('add item to end of the list',()=>{
    //console.log(cq)
    cq.add("item 1")
    let cqi = cq.add("item 2")
    expect(cqi.last.value).toEqual("item 2")
  })
  test('remove first item from the top of the list',()=>{
    //with one item
    cq.add("item 1")
    let rem = cq.remove()
    expect(rem.value).toEqual("item 1")
    expect(cq.size).toEqual(0)
    //with two items
    cq.add("item 1")
    cq.add("item 2")
    rem = cq.remove()
    expect(rem.value).toEqual("item 1")
    expect(cq.size).toEqual(1)
  })
})