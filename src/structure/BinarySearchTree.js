/**
 * Binary Search Tree.
 * Average efficiency for insert and find is O(log n)
 * But ONLY if the numbers are NOT added in the
 * chronological order because it will create
 * one-sided tree
*/


class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree{
  constructor(){
    this.root = null
  }
  addChild(parent,item){
    //console.log("addChild...parent", parent,item)
    //console.log("addChild...newItem",item)
    if (item.value < parent.value){
      //add to left
      if (parent.left===null){
        parent.left = item
        return true
      }else{
        //item already exists
        //call function again
        this.addChild(parent.left,item)
      }
    } else if (item.value > parent.value){
      if (parent.right===null){
        parent.right = item
        return true
      }else{
        //item already exists, call function again
        this.addChild(parent.right,item)
      }
    } else {
      //console.log("Already added")
      //attempting to add value that
      //already is added just return
      return true
    }
  }
  insert(value){
    let newNode = new Node(value)

    if (this.root===null){
      this.root = newNode
    } else {
      this.addChild(this.root,newNode)
    }
    return this
  }

  findChild(parent, value){
    if (value < parent.value){
      //look for left
      if (parent.left===null){
        return false
      } else {
        return this.findChild(parent.left,value)
      }
    }else if (value > parent.value){
      if(parent.right===null){
        return false
      } else {
        return this.findChild(parent.right,value)
      }
    }else{
      //parent value equals
      return true
    }
  }
  find(value){
    if (this.root===null) return false
    return this.findChild(this.root,value)
  }
  /**
   * Breath-First-Search tree traversal. It traverse
   * tree in the width first, from left to right
   * before moving to next level (depth)
   */
  BFS(){
    if (this.root===null) return []
    let node = this.root,
    data=[],queue=[]
    queue.push(node)

    //loop until something in queue
    while(queue.length){
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    //return data list
    return data
  }
  /**
   * Depth-First-Search tree traversal. It traverses
   * top down, left side first
   */
  DFS_PreOrder(){
    let data=[]
    if (this.root===null) return data
    //let current = root
    function traverse(parent){
      //first add value
      data.push(parent.value)
      //explore level deeper
      if(parent.left) traverse(parent.left)
      if(parent.right) traverse(parent.right)
    }
    //call traverse function
    traverse(this.root)
    //return data array
    return data
  }
  /**
   * Depth-First-Search PostOrder. It traverses
   * bottom up, left and right and going up. The
   * root is last item in the list
   */
  DFS_PostOrder(){
    let data=[]
    if (this.root===null) return data
    function traverse(parent){
      //first traverse to bottom
      if(parent.left) traverse(parent.left)
      if(parent.right) traverse(parent.right)
      //then add value after traversal
      data.push(parent.value)
    }
    //call traverse function
    traverse(this.root)
    //return data array
    return data
  }
  /**
   * Traverse left side first then the right side.
   * This approach will return asc ordered list,
   * if numbers are used as in this example
   */
  DFS_LeftOrder(){
    let data=[]
    if (this.root===null) return data
    function traverse(parent){
      //first traverse left to bottom
      if(parent.left) traverse(parent.left)
      //then add value
      data.push(parent.value)
      //them traverse right values
      if(parent.right) traverse(parent.right)
    }
    //call traverse function
    traverse(this.root)
    //return data array
    return data
  }
}