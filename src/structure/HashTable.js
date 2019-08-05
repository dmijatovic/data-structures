/**
 * Custom Hash table using key-value pairs.
 * This implementation uses strings as key.
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
 }