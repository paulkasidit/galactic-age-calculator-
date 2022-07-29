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


})

