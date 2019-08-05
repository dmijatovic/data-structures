/**
* STACK data structure. More than one way to implement it.
* The main rule is LIFO
*/

/**
 * Simple stack structure (LIFO) using array
 */
export class SimpleStack{
  constructor(){
    this.stack=[]
  }
  getStack(){
    return this.stack
  }
  addToStack(item){
    this.stack.push(item)
    return true
  }
  removeFromStack(){
    let rem = this.stack.pop()
    return rem
  }
  length(){
    return this.stack.length
  }
}

/**
 * Linked list stack implementation.
 * More efficient approach for just adding
 * and removing items from the stack.
 * To achieve contant time we use add item
 * at the begining of the list AND remove
 * item from the begining of the list.
 * According to big O notation O(1) = constant
 * no matter how many items we have in stack.
*/

export class StackItem {
  constructor(value){
    this.value = value
    this.next = null;
  }
}

export class LinkedListStack{
  constructor(){
    this.init()
  }
  init(){
    this.first = null
    this.last = null
    this.size = 0
  }
  /**
   * Add item at the begining of the stack
   * @param {*} value
   */
  add(value){
    let item = new StackItem(value)
    if (this.size===0){
      //Note! reference to same item is
      //set to first & last item at the begining
      //that makes possible later on to only add
      //next value to first/last item and replace it
      this.first = item
      this.last = item
    } else {
      //add current first item to
      //be next item of new first item
      item.next = this.first
      //set first item to be new item
      this.first = item
    }
    this.size++
    return this
  }
  /**
   * Remove top item (last added item) from the stack.
   * LIFO approach
   */
  remove(){
    if (this.first===null) return null
    let firstItem = this.first
    //set first item to be next item
    //of current first item
    this.first = firstItem.next
    //descrease count
    this.size--
    //reset all values if we reach null
    if (this.size<=0) this.init()
    //return removed items
    return firstItem
  }
}