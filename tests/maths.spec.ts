import * as m from '../src/maths';
import hw, {sum} from '../src/maths'; // Shows optionally getting the default export

 describe('Add Numbers', () => {
    it('should add two numbers', () => {
      expect(m.sum(5,11)).toEqual(16); /*? result */
    });
  });/*  */


  describe('Subtract Numbers', () => {
    it('should subtract two numbers', () => {
      expect(m.subtract(10,7)).toEqual(3); /*? result */
    });
  });

  describe('Multiply Numbers', () => {
    it('should multiply two numbers', () => {
      expect(m.multiply(10,6)).toEqual(60); /*? result */
    }); 
  });

  describe('Divide Numbers', () => {
    it('should Divide two numbers', () => {
      expect(m.divide(300,10)).toEqual(30); /*? result */
    });
  });

describe('Double Numbers', () => {
    it('should double two numbers', () => {
      expect(m.doubleNumber(300)).toEqual(600); /*? result */
    });
  });



  describe('Hello World', () => {
    it('Gets the detault export of the module', () => {
      expect(hw()).toEqual('Hello World'); /*? result */
    });
  });/*  */