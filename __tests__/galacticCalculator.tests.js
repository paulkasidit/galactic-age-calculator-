import { TestScheduler } from 'jest';
import galacticCalculator from '../src/galacticCalculator.js';

describe('galacticCalculator',() => {

  test ("should return age as integer", () => {
    const age1 = new galacticCalculator(24); 
    expect(galacticCalculator.age).toEqual(24); 
  }); 

  test ("should return life expectancy as integer", () => {
    const age1 = new galacticCalculator(24, 85); 
    expect(galacticCalculator.lifeExpectancy).toEqual(85); 
  });

});

