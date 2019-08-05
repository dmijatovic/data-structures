
import {BinarySearchTree} from './BinarySearchTree'

describe('Binary Search Tree data structure',()=>{
  let bst
  beforeEach(()=>{
    bst = new BinarySearchTree()
  })
  test ('create BST class',()=>{
    // console.log(bst)
    expect(bst).toBeTruthy()
  })
  test('add root item to BST',()=>{
    let x = bst.insert(10)
    expect(x.root.value).toEqual(10)
  })
  test('add item to the left of the root',()=>{
    let x = bst.insert(10)
    x = bst.insert(9)
    expect(x.root.left.value).toEqual(9)
  })
  test('add item to the right of the root',()=>{
    let x = bst.insert(10)
    x = bst.insert(11)
    expect(x.root.right.value).toEqual(11)
  })
  test('add item to second level on the left',()=>{
    let x = bst.insert(10)
    x=bst.insert(8)
    x=bst.insert(9)
    expect(x.root.left.right.value).toEqual(9)
  })
  test('ignore duplicates',()=>{
    bst.insert(10)
    let x = bst.insert(10)
    expect(x.root.value).toEqual(10)
  })
  test ('find() returns true if root value exists',()=>{
    bst.insert(10)
    let f = bst.find(10)
    expect(f).toBe(true)
  })
  test('find() returns false if value not found',()=>{
    bst.insert(10)
    let f = bst.find(9)
    expect(f).toBe(false)
  })
  test('find() returns true if value exists as child',()=>{
    bst.insert(10)
    bst.insert(13)
    bst.insert(7)
    let f = bst.find(7)
    expect(f).toBe(true)
    f = bst.find(8)
    expect(f).toBe(false)
  })
})

describe('Tree traversal techniques',()=>{
  let bst
  beforeEach(()=>{
    bst = new BinarySearchTree()
    let list = [10,14,12,8,9,5]
    list.map(item=>{
      bst.insert(item)
    })
  })
  test('return list using BFS order',()=>{
    let lst = bst.BFS()
    let resp = [10,8,14,5,9,12]
    expect(lst).toEqual(resp)
    //console.log(lst)
  })
  test('returns DFS_PreOrder list',()=>{
    let lst = bst.DFS_PreOrder()
    let resp = [10,8,5,9,14,12]
    expect(lst).toEqual(resp)
    //console.log(lst)
  })
  test('returns DFS_PostOrder list',()=>{
    let lst = bst.DFS_PostOrder()
    let resp = [5,9,8,12,14,10]
    expect(lst).toEqual(resp)
    //console.log(lst)
  })
  test('returns DFS_LeftOrder list',()=>{
    let lst = bst.DFS_LeftOrder()
    let resp = [5,8,9,10,12,14]
    expect(lst).toEqual(resp)
  })
})