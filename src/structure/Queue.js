/**
 * Queue is a list with FIFO approach.
 * First item added is the first to be removed from the list.
 */

export class SimpleQueue{
  constructor(){
    this.queue = []
  }

  add(value){
    this.queue.push(value)
    return this.queue
  }

  remove(){
    let rem = this.queue.shift()
    return rem
  }

  size(){
    this.queue.length
  }
}

/**
 * Custom queue is more effcient approach that using
 * arrays. In order to achieve effciency the approach
 * using linked list we need to add to the end and
 * remove from the begining.
*/

export class QueueItem{
  constructor(value){
    this.value = value
    this.next = null
  }
}

export class CustomQueue{
  constructor(){
    this.init()
  }
  init(){
    this.first = null
    this.last = null
    this.size = 0
  }
  /**
   * Add new queue item at the end of the list
   * @param {*} value
   */
  add(value){
    let newItem = new QueueItem(value)
    if (this.size===0){
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    this.size++
    return this
  }
  /**
   * Remove first item added to the list
   * FIFO approach
   */
  remove(){
    if (this.size===0){
      this.init()
      return null
    } else {
      let first = this.first
      let newFirst = this.first.next
      //set second to be first
      this.first = newFirst
      //decrease counter
      this.size--
      //return removed element
      return first
    }
  }
}