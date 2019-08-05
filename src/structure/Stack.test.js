/**
 * STACK data structure. More than one way to implement it.
 * The main rule is LIFO
 */

import {SimpleStack, LinkedListStack} from './Stack'

describe('SimpleStack using array',()=>{
  let ss
  beforeEach(()=>{
    ss = new SimpleStack()
  })
  test ('add item to stack',()=>{
    let add = ss.addToStack("item1")
    expect(add).toBe(true)
    expect(ss.length()).toEqual(1)
  })
  test ('removes last items from the stack (LIFO)',()=>{
    ss.addToStack('item 1')
    ss.addToStack('item 2')
    expect(ss.length()).toEqual(2)
    ss.removeFromStack()
    expect(ss.length()).toEqual(1)
    let st = ss.getStack()
    expect(st).toEqual(['item 1'])
  })
})

describe('LinkedList Stack implementation',()=>{
  let lls
  beforeEach(()=>{
    lls = new LinkedListStack()
  })
  test('Add each new item at the TOP of the stack',()=>{
    let st = lls.add("item1")
    expect(st.size).toEqual(1)
    st = lls.add("item2")
    expect(st.first.value).toEqual("item2")
    st = lls.add("item3")
    expect(st.first.value).toEqual("item3")
    expect(st.first.next).not.toBe(null)
    expect(st.last.next).toBe(null)
    //console.log(st)
  })
  test('Remove the item from the TOP of the stack - LIFO',()=>{
    //test with no items
    let rem = lls.remove()
    expect(rem).toBe(null)

    //test with one item
    lls.add("item 1")
    expect(lls.size).toEqual(1)
    rem = lls.remove()
    expect(rem.value).toEqual("item 1")
    expect(lls.size).toEqual(0)

    //test with 2 items
    lls.add("item 1")
    lls.add("item 2")

    rem = lls.remove()
    expect(rem.value).toEqual("item 2")
    expect(lls.size).toEqual(1)
  })
})