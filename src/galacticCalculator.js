export default class galacticCalculator { 

  constructor(age, lifeExpectancy) {
    this.age = parseInt(age);  
    this.lifeExpectancy = parseInt(lifeExpectancy); 
  }

  mercuryAge(){
    this.age = Math.round((this.age/0.24)); 
  }

  venusAge(){
    this.age = Math.round((this.age/0.62)); 
  }
  
  marsAge() { 
    this.age = Math.round((this.age/1.88)); 
  }

  jupiterAge() { 
    this.age = Math.round((this.age/11.86)); 
  }



}