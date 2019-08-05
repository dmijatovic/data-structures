
import {Node,DoublyLinkedList} from './DoublyLinkedList'

describe('Doubly Linked List',()=>{

  test('creates Node class with val',()=>{
    const node = new Node("test")
    expect(node.val).toEqual("test")
  })

  describe('DoublyLinkedList push method',()=>{
    let sll
    beforeAll(()=>{
      sll = new DoublyLinkedList()
    })
    test ('creates first Node',()=>{
      let node = new Node("node1")
      let lst = sll.push("node1")
      expect(node.val).toEqual("node1")
      expect(lst.head).toEqual(node)
      expect(lst.length).toEqual(1)
    })
    test ('creates second node and set it as tail node',()=>{
      let lst = sll.push("node2")
      let node = new Node("node2")
      expect(lst.length).toEqual(2)
      expect(lst.tail).toEqual(node)
    })
    test ('creates third node and set it as tail node',()=>{
      let lst = sll.push("node3")
      let node = new Node("node3")
      expect(lst.length).toEqual(3)
      expect(lst.tail).toEqual(node)
    })
  })
  describe('pop() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('pop() removes the last node',()=>{
      //add 2 nodes
      sll.push("node1")
      sll.push("node2")
      //get tail
      let tail = sll.tail
      let del = sll.pop()
      expect(sll.tail).not.toEqual(tail)
      expect(sll.length).toBe(1)
      expect(sll.tail.val).toEqual("node1")
      expect(del.val).toBe("node2")
    })
    test('returns null when cannot pop - empty list',()=>{
      //add 2 nodes
      sll.push("node1")
      sll.push("node2")
      //delete last
      let del = sll.pop()
      expect(del.val).toBe("node2")

      del = sll.pop()
      expect(del.val).toBe("node1")

      del = sll.pop()
      expect(del).toBe(null)
    })
  })
  describe("shift() method",()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
      //add 2 nodes
      sll.push("node1")
      sll.push("node2")
    })
    test('removed first item from the list',()=>{
      let sh = sll.shift()
      expect(sh.val).toBe("node1")
    })
    test('moved second item to head',()=>{
      let sh = sll.shift()
      expect(sll.head.val).toBe("node2")
    })
    test('clears head & tail after last item shift',()=>{
      let sh = sll.shift()
      sh = sll.shift()
      //console.log(sll)
      expect(sll.head).toBe(null)
      expect(sll.tail).toBe(null)
    })
  })
  describe('addFirst() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('assigns head and tail for first item',()=>{
      let lst = sll.addFirst("node3")
      expect(lst.head.val).toEqual("node3")
      expect(lst.tail.val).toEqual("node3")
      expect(lst.tail.next).toBe(null)
    })
    test('adds third item as first item',()=>{
      //add 2 nodes
      sll.addFirst("node1")
      sll.addFirst("node2")
      let lst = sll.addFirst("node3")
      expect(lst.head.val).toEqual("node3")
    })
    test('increments list length counter',()=>{
      sll.addFirst("node1")
      expect(sll.length).toBe(1)
      sll.addFirst("node2")
      expect(sll.length).toBe(2)
      sll.addFirst("node3")
      expect(sll.length).toBe(3)
    })
    test('keep track of next node',()=>{
      let lst = sll.addFirst("node1")
      expect(lst.head.next).toBe(null)
      expect(lst.tail.next).toBe(null)
      lst = sll.addFirst("node2")
      expect(lst.head.next).not.toBe(null)
      expect(lst.tail.next).toBe(null)
    })
  })
  describe('getItemAt() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('returns item at pos',()=>{
      sll.push("item1")
      sll.push("item2")
      let n = sll.getItemAt(0)
      expect(n.val).toEqual("item1")
      n = sll.getItemAt(1)
      expect(n.val).toEqual("item2")
    })
    test('returns null when no items',()=>{
      let n = sll.getItemAt(0)
      expect(n).toBe(null)
    })
    test('returns null when pos incorrect',()=>{
      let n = sll.getItemAt(100)
      expect(n).toBe(null)
      n = sll.getItemAt(-100)
      expect(n).toBe(null)
    })
  })
  describe('setItemAt() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('updates first item value',()=>{
      sll.push("item1")
      let done = sll.setItemAt(0,'item updated')
      expect(done).toBe(true)
      let n = sll.getItemAt(0)
      expect(n.val).toEqual('item updated')
    })
    test ('returns false on update failure',()=>{
      let done = sll.setItemAt(100,"nothing")
      expect(done).toBe(false)
    })
  })
  describe('insertItemAt() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('inserts first item at 0 pos',()=>{
      let insert = sll.insertItemAt(0,"item1")
      expect(insert).toBe(true)
      let n = sll.getItemAt(0)
      expect(n.val).toEqual("item1")
    })
    test('inserts item at the end',()=>{
      sll.push("item1")
      let ins = sll.insertItemAt(1,"item2")
      expect(ins).toBe(true)
      let n = sll.getItemAt(1)
      expect(n.val).toEqual("item2")
    })
    test('returns false if value not provided',()=>{
      sll.push("item1")
      let ins = sll.insertItemAt(1)
      expect(ins).toBe(false)
    })
    test('inserts item in the middle of a list',()=>{
      sll.push("item1")
      sll.push("item3")
      let ins = sll.insertItemAt(1,"item2")
      expect(ins).toBe(true)
      let n = sll.getItemAt(1)
      expect(n.val).toBe("item2")
      expect(n.next).not.toBe(null)
    })
  })
  describe('removeItemAt() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('removes item at first position',()=>{
      sll.push("item1")
      let rem = sll.removeItemAt(0)
      expect(rem).toBe(true)
      expect(sll.length).toEqual(0)
    })
    test('removes last item in the list',()=>{
      sll.push("item1")
      sll.push("item2")
      let rem = sll.removeItemAt(1)
      expect(rem).toBe(true)
      expect(sll.length).toEqual(1)
      let n = sll.getItemAt(0)
      expect(n.val).toEqual("item1")
    })
    test('removes item in the middle of the list',()=>{
      sll.push("item1")
      sll.push("item2")
      sll.push("item3")
      let rem = sll.removeItemAt(1)
      expect(rem).toBe(true)
      expect(sll.length).toEqual(2)
      let n = sll.getItemAt(1)
      expect(n.val).toEqual("item3")
      expect(n.next).toBe(null)
      n = sll.getItemAt(0)
      expect(n.val).toEqual("item1")
      expect(n.next.val).toEqual("item3")
    })
  })
  describe('reverseList() method',()=>{
    let sll
    beforeEach(()=>{
      sll = new DoublyLinkedList()
    })
    test('reverse list of 3 items',()=>{
      sll.push("item1")
      sll.push("item2")
      sll.push("item3")

      let rev = sll.reverseList()
      //console.log(rev)
      expect(rev.tail.val).toEqual("item1")
      expect(rev.tail.next).toBe(null)
      expect(rev.head.val).toEqual("item3")
      expect(rev.head.next.val).toEqual("item2")
    })
  })
})