
import {MaxBinaryHeap} from './MaxBinaryHeap'

describe('MaxBinaryHeap data structure',()=>{
  let mbh
  beforeEach(()=>{
    let numbers = [10,34,56,89,3,7,11]
    mbh = new MaxBinaryHeap()
    numbers.map(num=>{
      mbh.insert(num)
    })
  })
  test('Creates MBH class',()=>{
    //console.log(mbh)
    expect (mbh).toBeTruthy()
  })
  test('insert a value in MaxBinaryHeap order',()=>{
    let heap=[89,56,34,10,3,7,11]
    let x = mbh.getHeap()
    expect(x).toEqual(heap)
    //console.log(x)
  })
  test('extractMax() returnes max value from numbers array',()=>{
    let x = mbh.extractMax()
    expect(x).toEqual(89)
  })
  test('extractMax() removed 89 from values',()=>{
    mbh.extractMax()
    let x = mbh.getHeap()
    expect(x).not.toContain(89)
  })
  test('extractMax() removed 89 and 56 from values',()=>{
    mbh.extractMax()
    mbh.extractMax()
    let x = mbh.getHeap()
    expect(x).not.toContain(56)
  })
})