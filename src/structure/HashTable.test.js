
import {HashTable} from './HashTable'

describe('HashTables class',()=>{
  let ht
  beforeEach(()=>{
    ht = new HashTable()
  })
  test ('Creates HashTable class',()=>{
    expect(ht).toBeTruthy()
  })
  test('Returns hash value for a key',()=>{
    let hash = ht.hash("test")
    //console.log(hash)
    expect(hash).not.toBe(0)
  })
  test('Returns consistent hash value',()=>{
    let hash1 = ht.hash("test")
    //console.log(hash)
    let hash2 = ht.hash("test2")
    expect(hash1).not.toEqual(hash2)
    let hash3 = ht.hash("test")
    expect(hash1).toEqual(hash3)
  })
})
