export default class galacticCalculator { 

  constructor(age, lifeExpectancy) {
    this.age = parseInt(age);  
    this.lifeExpectancy = parseInt(lifeExpectancy); 
  }

  mercuryAge(){
    this.age = (this.age/0.24); 
  }


}