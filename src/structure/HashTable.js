import { isArray } from "util";

/**
 * Custom Hash table using key-value pairs.
 * This implementation uses strings as key.
 * We use nested array structure
 */

 export class HashTable{
   constructor(size=53){
    this.keyMap = new Array(size)
   }
   /**
    * Map key to specific array position within
    * the range defined by length in the constructor.
    * @param {*} key
    */
   hash(key){
     let id=0
     let some_prime = 31
     for (let char of key){
       //return ascii value reduced by 96
       //to have first letter at value 1
       let val = char.charCodeAt(0)-96
       //sum all char values and
       //take modulo of max length
       //defined. Module approach returns
       //valid value in the length range
       id=(id * some_prime + val) % this.keyMap.length
     }
     return id
   }
   /**
    * Save key-val pair to hash table
    * @param {String} key
    * @param {any} val
    */
   set(key,val){
     try{
       //ignore empty key or val
      if (!key) throw "Key not defined"
      if (!val) throw "Invalid value provided"
      //generate hash for a key
      let id = this.hash(key)
      //create data array
      let dataPair = [key,val]
      //load data block
      let dataBlock = this.keyMap[id]
      //make datablock to be array
      if (isArray(dataBlock)===false){
        dataBlock = []
      }
      //push new instance
      dataBlock.push(dataPair)
      this.keyMap[id] = dataBlock
      return true
     }catch(e){
       //console.log("Error: ",e)
       return false
     }
   }
   /**
    * Retreive data from hash table for a given key
    * @param {String} key
    */
   get(key){
    if (!key) return undefined
    let id = this.hash(key)
    //console.log("id..",id)
    let dataBlock= this.keyMap[id]
    //console.log("dataBlock...",dataBlock)

    if (!isArray(dataBlock)) return undefined

    if(dataBlock.length===1){
      return dataBlock[0][1]
    } else {
      let val = this.findInArray(key,dataBlock)
      return val
    }
   }
   /**
    * Find key in the array.
    * Key is at position 0 of array
    * @param {String} key
    * @param {Array} dataBlock
    */
   findInArray(key, dataBlock){
    for (let i=0; i<dataBlock.length; i++){
      let item = dataBlock[i]
      //console.log("item...", item)
      if (item[0]===key){
        return item[1]
      }
    }
   }
 }