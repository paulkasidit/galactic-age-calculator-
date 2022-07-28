export default class Age { 

  constructor(age) {
    this.age = age; 
  }

  checkInput(){ 
    if (Number.isInteger(this.age)){
      return true;
    } else {
      return false; 
    }
  }

  mercuryAge(){
    let age = this.age; 

    if (this.checkInput(age) === true){
      return this.age * .24; 
    } else if (this.checkInput(age) === true) {
      this.age = "invalid input"; 
    } else {
      return this.age;
    }
}
}