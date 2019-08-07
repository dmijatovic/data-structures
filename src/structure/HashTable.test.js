
import {HashTable} from './HashTable'

describe('HashTables class',()=>{
  let ht
  beforeEach(()=>{
    ht = new HashTable(3)
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
    let hash2 = ht.hash("testtest")
    expect(hash1).not.toEqual(hash2)
    let hash3 = ht.hash("test")
    expect(hash1).toEqual(hash3)
  })
  test('Set returns false if no key or val',()=>{
    let dataBlock = ht.set()
    expect(dataBlock).toBe(false)
  })
  test('Set returns true when data added',()=>{
    let data = ["key","any value"]
    let resp = ht.set(data[0],data[1])
    //expect(dataBlock).toBeArray()
    expect(resp).toBe(true)
    // let d2 = ["key2","another value"]
    // dataBlock = ht.set(d2[0],d2[1])
    // expect(dataBlock).toContain([d2])
  })
  test('Get saved values for key1 and key3',()=>{
    //set data
    ht.set("key1","any data 1")
    ht.set("key2","any data 2")
    ht.set("key3","any data 3")
    ht.set("key4","any data 4")

    //let get = ht.get("key1")
    //console.log(get)
    expect(ht.get("key1")).toEqual("any data 1")
    expect(ht.get("key3")).toEqual("any data 3")

  })
})
