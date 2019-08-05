/**
 * MaxBinaryHeap
 *
 */

 export class MaxBinaryHeap{
  constructor(){
     this.values=[]
  }
   getHeap(){
    return this.values
  }
   /**
    * Place last item of the array
    * to correct position. MaxBinaryHeap
    * Parent = (n-1)/2
    */
  bubbleUp(index){
    let len = this.values.length
    if (len < 2) return true

    let child = this.values[index]
    let pin = Math.floor((index-1)/2)

    if (pin < 0) return true
    let parent = this.values[pin]

    if (child > parent){
      //swap values
      this.values[pin] = child
      this.values[index] = parent
      //call it again with new child position
      this.bubbleUp(pin)
    } else {
      return true
    }
   }
  insert(value){
    //insert value to array
    this.values.push(value)
    this.bubbleUp(this.values.length-1)
    return this
  }
  /**
   * Move number down the heap if lower.
   * Swap with the highest node
   * @param {Number} index
   */
  bubbleDown(index){
    let parent = this.values[index]
    let len = this.values.length
    let lpos = (2 * index) + 1
    let rpos = (2 * index) + 2
    let lChild = null, rChild=null

    if (lpos<len) lChild = this.values[lpos]
    if (rpos<len) rChild = this.values[rpos]

    // console.log("bubbleDown...parent...", parent)
    // console.log("bubbleDown...lChild...", lChild)
    // console.log("bubbleDown...rChild...", rChild)

    if (lChild &&
      lChild > rChild &&
      lChild > parent){
      //swap lChild and parent
      this.values[lpos] = parent
      this.values[index] = lChild
      //call bubleDown again
      this.bubbleDown(lpos)
    } else if (rChild &&
      rChild > lChild &&
      rChild > parent){
      //swap rChild and parent
      this.values[rpos] = parent
      this.values[index] = rChild
      //call bubleDown again
      this.bubbleDown(rpos)
    } else {
      //no swap
      return true
    }
  }
  extractMax(){
    let len = this.values.length

    if (len===0) return null

    let max = this.values[0]
    let last = this.values.pop()
    //move last to first position
    if (this.values.length > 0){
      this.values[0] = last
      //bubble down
      this.bubbleDown(0)
    }
    //return removed max
    return max
  }
 }