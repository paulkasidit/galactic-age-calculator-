import { TestScheduler } from 'jest';
import galacticCalculator from '../src/galacticCalculator.js';

describe('galacticCalculator',() => {

  let paul; 

  beforeEach(() => {
    paul = new galacticCalculator(24, 85);
  });

  test('should create a galacticAgeCalculator object with age and lifexpectancy property', () => {
    expect(paul.age).toEqual(24); 
    expect(paul.lifeExpectancy).toEqual(85); 
    expect(paul.yearsLeft).toEqual(0); 
    expect(paul.yearsPastLifeExpectancy).toEqual(0); 
  }); 

  //mercury 
  test('should return mercury age', () => {
    paul.mercuryAge();
    expect(paul.age).toEqual(100); 
  });

  test('should return mercury life expectancy', () => {
    paul.mercuryAge();
    expect(paul.lifeExpectancy).toEqual(354); 
  });

  test('should return years left to live on mercury', () => {
    paul.mercuryAge();
    expect(paul.yearsLeft).toEqual(254); 
  });

  test('should return yearsPastLifeExpectancy if user has outlived their life expectancy on mercury, yearsLeft property should be reduced to zero', () => {
    let paul =  new galacticCalculator(85, 24);
    paul.mercuryAge();
    expect(paul.yearsPastLifeExpectancy).toEqual(254); 
    expect(paul.yearsLeft).toEqual(0); 
  });

  //venus 
  test('should return venus age', () => {
    paul.venusAge();
    expect(paul.age).toEqual(39); 
  });

  test('should return venus life expectancy', () => {
    paul.venusAge();
    expect(paul.lifeExpectancy).toEqual(137); 
  }); 

  test('should return years left to live on venus', () => {
    paul.venusAge();
    expect(paul.yearsLeft).toEqual(98); 
  });

  test('should return yearsPastLifeExpectancy if user has outlived their life expectancy on venus, yearsLeft property should be reduced to zero', () => {
    let paul =  new galacticCalculator(85, 24);
    paul.venusAge();
    expect(paul.yearsPastLifeExpectancy).toEqual(98); 
    expect(paul.yearsLeft).toEqual(0); 
  }); 
  

  //mars
  test('should return mars age', () => {
    paul.marsAge();
    expect(paul.age).toEqual(13); 
  }); 

  test('should return mars life expectancy', () => {
    paul.marsAge();
    expect(paul.lifeExpectancy).toEqual(45); 
  });

  test('should return years left to live on venus', () => {
    paul.marsAge();
    expect(paul.yearsLeft).toEqual(32); 
  });

  test('should return yearsPastLifeExpectancy if user has outlived their life expectancy on mars, yearsLeft property should be reduced to zero', () => {
    let paul =  new galacticCalculator(85, 24);
    paul.marsAge();
    expect(paul.yearsPastLifeExpectancy).toEqual(32); 
    expect(paul.yearsLeft).toEqual(0); 
  });


  //jupiter
  test('should return jupiter age', () => {
    paul.jupiterAge();
    expect(paul.age).toEqual(2); 
  }); 

  test('should return jupiter life expectancy', () => {
    paul.jupiterAge();
    expect(paul.lifeExpectancy).toEqual(7); 
  });


  test('should return years left to live on venus', () => {
    paul.jupiterAge();
    expect(paul.yearsLeft).toEqual(5); 
  });


})

