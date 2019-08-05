
export class Node{
  constructor(val){
    this.val=val
    this.next=null
  }
}

export class SinglyLinkedList{
  constructor(){
    this.init()
  }
  init(){
    this.head=null
    this.tail=null
    this.length=0
  }
  /**
   * Add new node to list as last item
   * @param {Any} val
   */
  push(val){
    let n = new Node(val)
    if (this.head===null){
      this.head = n
    }
    if (this.tail===null){
      this.tail = n
    }else{
      //provide next to old tail
      this.tail.next=n
      //set new tail
      this.tail = n
    }
    this.length+=1
    return this
  }
  /**
   * Add item at the top of the list.
   * Retuns new list
   * @param {*} val
   */
  addFirst(val){
    let first = new Node(val)
    if (this.head!==null){
      first.next = this.head;
      this.head = first
    } else {
      this.head = first
      this.tail = first
    }
    this.length++
    return this
  }
  /**
   * Removes last node from the list.
   * Returns removed node.
   */
  pop(){
    let node = this.head
    let prev
    if (node===null) return null

    while (node.next!==null){
      prev = node
      node = node.next
    }
    //set previous to tail
    if (prev){
      this.tail = prev
    } else {
      this.tail = node
    }
    this.tail.next = null
    //decrease count
    this.length-=1
    if (this.length===0){
      this.init()
    }
    //return list
    return node
  }
  /**
   * Remove first item from the list.
   * Returns shifted item.
   */
  shift(){
    if(this.head===null) return null
    let head = this.head
    this.head = head.next
    this.length--
    if (this.length===0){
      //console.log("init this")
      this.init()
    }
    return head
  }
  /**
   * Gets item from the list.
   * Zero based position index.
   * @param {Number} pos position of item in the list
   */
  getItemAt(pos){
    if (pos<0 || pos>this.length) return null
    if (this.head===null) return null

    let counter=0
    let node = this.head

    while(counter!==pos){
      node = node.next
      counter++
    }

    return node
  }
  /**
   * Replace item with new item at specificed position.
   * Zero based position index.
   * @param {Number} pos position
   * @param {*} val value to use
   */
  setItemAt(pos,val){
    if (typeof val == 'undefined') return false
    let node = this.getItemAt(pos)
    if (node){
      node.val = val
      return true
    }else{
      return false
    }
  }
  /**
   * Insert new item at specified position.
   * Zero based position index.
   * @param {Number} pos insert at position
   * @param {*} val
   */
  insertItemAt(pos,val){
    if (pos<0 || pos > this.length) return false
    if (typeof val == 'undefined') return false
    //first item
    if (pos === 0){
      let n = this.addFirst(val)
      if (n){
        return true
      } else {
        return false
      }
    }
    //last item
    if (pos===this.length){
      let lst = this.push(val)
      if(lst)return true
      else false
    }
    //item in between
    let prev = this.getItemAt(pos-1)
    let shifted = this.getItemAt(pos)
    let newItem = new Node(val)
    newItem.next = shifted
    prev.next = newItem

    return true
  }
  /**
   * Removes items at specified position in the list.
   * Zero based position index.
   * @param {Number} pos - item position in the list
   */
  removeItemAt(pos){
    if (pos<0 || pos>this.length) return false
    //first item
    if (pos===0){
      let n = this.shift()
      if(n) return true
      else return false
    }
    //last item
    if (pos===this.length-1){
      let n = this.pop()
      if (n) return true
      else return false
    }
    //item in the middle
    let prev = this.getItemAt(pos-1)
    let toRemove = this.getItemAt(pos)
    prev.next = toRemove.next
    //reduce counter
    this.length--
    return true
  }
  /**
   * Reverse the list
   */
  reverseList(){
    if (this.length===0) return null

    let node = this.head
    //let tail = this.tail
    let prevNode=null, nextNode=null

    //reverse head an tail nodes
    this.head = this.tail
    this.tail = node
    let counter = 0

    while(counter < this.length){
      //set reference to next node
      nextNode = node.next
      //assign next to be prev node
      //note at first run prevNode is null
      //this will work for tail node too
      node.next = prevNode
      //assign prev to be current node
      prevNode = node
      //increase counter
      counter++
      //move current to be next
      node = nextNode
    }
    return this
  }
}


export default {
  Node
}