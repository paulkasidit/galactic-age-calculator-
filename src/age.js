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

  


}