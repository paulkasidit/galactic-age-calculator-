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
  }); 

  test('should return mercury age', () => {
    paul.mercuryAge();
    expect(paul.age).toEqual(100); 
  });

  test('should return venus age', () => {
    paul.venusAge();
    expect(paul.age).toEqual(39); 
  });

  test('should return venus age', () => {
    paul.marsAge();
    expect(paul.age).toEqual(13); 
  }); 

  test('should return jupiter age', () => {
    paul.jupiterAge();
    expect(paul.age).toEqual(2); 
  }); 

})

