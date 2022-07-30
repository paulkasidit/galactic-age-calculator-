export default class galacticCalculator { 

  constructor(age, lifeExpectancy) {
    this.age = parseInt(age);  
    this.lifeExpectancy = parseInt(lifeExpectancy);
    this.yearsLeft = 0; 
    this.yearsPastLifeExpectancy = 0; 
  }

  mercuryAge(){
    this.age = Math.round((this.age/0.24)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/0.24));
    this.yearsLeft = Math.round(this.lifeExpectancy - this.age); 

    if ( this.yearsLeft < 0){ 
      this.yearsPastLifeExpectancy = this.yearsLeft * -1;
      this.yearsLeft = 0; 
    } else { 
      this.yearsPastLifeExpectancy += 0; 
      this.yearsLeft += 0; 
    }

  }

  venusAge(){
    this.age = Math.round((this.age/0.62)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/0.62));
    this.yearsLeft = Math.round(this.lifeExpectancy - this.age); 

    if ( this.yearsLeft < 0){ 
      this.yearsPastLifeExpectancy = this.yearsLeft * -1;
      this.yearsLeft = 0; 
    } else { 
      this.yearsPastLifeExpectancy += 0; 
      this.yearsLeft += 0; 
    }
    
  }
  
  marsAge() { 
    this.age = Math.round((this.age/1.88)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/1.88));
    this.yearsLeft = Math.round(this.lifeExpectancy - this.age); 
  }

  jupiterAge() { 
    this.age = Math.round((this.age/11.86)); 
    this.lifeExpectancy = Math.round((this.lifeExpectancy/11.86));
    this.yearsLeft = Math.round(this.lifeExpectancy - this.age); 
  }

}