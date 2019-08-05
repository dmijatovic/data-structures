/**
 * PriorityQueue class
 * Implements Binary Heap approach for efficient
 * priority queue. Big o notation => O(log n)
 */

class Node{
  constructor(prio, value){
    this.prio = prio
    this.value = value
  }
}

export class PriorityQueue{
  constructor(){
    this.queue = []
  }
  getQueue(){
    return this.queue
  }
  bubbleUp(index){
    let len = this.queue.length
    if (len < 2) return true

    let child = this.queue[index]
    let pin = Math.floor((index-1)/2)

    if (pin < 0) return true
    let parent = this.queue[pin]

    if (child.prio > parent.prio){
      //swap values
      this.queue[pin] = child
      this.queue[index] = parent
      //call it again with new child position
      this.bubbleUp(pin)
    } else {
      return true
    }
  }
  add(priority, value){
    let node = new Node(priority,value)
    this.queue.push(node)
    this.bubbleUp(this.queue.length-1)
    return this.queue
  }
  /**
   * Take highest piority
   */
  takeHighestPrio(){
    let len = this.queue.length
    if (len===0) return null 
    //get highest prio item 
    //it is top item
    let hp = this.queue[0]
    //get last item
    let li = this.queue.pop()
    if (this.queue.length > 0){
      //set last item to top position
      this.queue[0]=li
      //bubble down item at top position
      this.bubbleDown(0)
    }
    //return highest prio item
    return hp 
  }
  /**
   * Move item down the heap if lower priority.
   * Swap with the sybling node with the highest priority
   * @param {Number} index
   */
  bubbleDown(index){
    let parent = this.queue[index]
    let len = this.queue.length
    let lpos = (2 * index) + 1
    let rpos = (2 * index) + 2
    let lChild = null, rChild=null

    if (lpos<len) lChild = this.queue[lpos]
    if (rpos<len) rChild = this.queue[rpos]

    // console.log("bubbleDown...parent...", parent)
    // console.log("bubbleDown...lChild...", lChild)
    // console.log("bubbleDown...rChild...", rChild)

    if (lChild &&
      lChild.prio > rChild.prio &&
      lChild.prio > parent.prio){
      //swap lChild and parent
      this.queue[lpos] = parent
      this.queue[index] = lChild
      //call bubleDown again
      this.bubbleDown(lpos)
    } else if (rChild &&
      rChild.prio > lChild.prio &&
      rChild.prio > parent.prio){
      //swap rChild and parent
      this.queue[rpos] = parent
      this.queue[index] = rChild
      //call bubleDown again
      this.bubbleDown(rpos)
    } else {
      //no swap
      return true
    }
  }
}