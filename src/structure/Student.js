/**
 * Declares student class structure as example of using classes in JS
 */
class Student{
  constructor(firstName,lastName, year){
    this.firstName=firstName
    this.lastName=lastName
    this.grade = year
    this.tardies = 0
    this.scores=[]
  }
  fullName(){
    return `Yout full name is ${this.firstName} ${this.lastName}`
  }
  markLate(){
    this.tardies+=1
    if (this.tardies>3){
      return "You are EXPELLED from scholl!!"
    }
  }
  addScore(score){
    this.scores.push(score)
    return this.scores
  }
  calculateAverage(){
    let sum = this.scores.reduce((prev,item)=>{
      prev+=item
    })
    let avg = sum/this.scores.length
    return avg
  }
  static testStaticMethod(){
    return "Static method works!"
  }
}

export default Student