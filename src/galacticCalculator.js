export default class galacticCalculator { 

  constructor(age, lifeExpectancy) {
    this.age = parseInt(age);  
    this.lifeExpectancy = parseInt(lifeExpectancy);
    this.yearsLeft = 0; 
  }

  mercuryAge(){
    this.age = Math.round((this.age/0.24)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/0.24));
  }

  venusAge(){
    this.age = Math.round((this.age/0.62)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/0.62));
  }
  
  marsAge() { 
    this.age = Math.round((this.age/1.88)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/1.88));
  }

  jupiterAge() { 
    this.age = Math.round((this.age/11.86)); 
  }



}