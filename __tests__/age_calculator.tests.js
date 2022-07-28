import { TestScheduler } from 'jest';
import Age from '../src/age.js';

describe('Age',() => {

  test ("should return age as integer", () => {
    const age1 = new Age(24); 
    expect(age1.age).toEqual(24); 
  }); 

  test("invalid inputs should return false", () => {
    const age1 = new Age('24'); 
    expect(age1.checkInput()).toEqual(false);
  });

  test("valid inputs should return true", () => {
    const age1 = new Age(24); 
    expect(age1.checkInput()).toEqual(true);
  });
  
  test("should return age multiplied by .24", () => {
    const age1 = new Age(24); 
    expect(age1.mercuryAge()).toEqual(5.76);
  });
  

});

