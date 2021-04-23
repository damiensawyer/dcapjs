import * as m from '../src/maths';
import hw, {sum} from '../src/maths'; // Shows optionally getting the default export

 describe('Add Numbers', () => {
    it('should add two numbers', () => {
      expect(m.sum(5,11)).toEqual(16); /*? result */
    });
  });/*  */


  describe('Subtract Numbers', () => {
    it('should subtract two numbers', () => {
      expect(m.subtract(10,5)).toEqual(5); /*? result */
    });
  });/*  */

  describe('Hellow World', () => {
    it('Gets the detault export of the module', () => {
      expect(hw()).toEqual('Hello World'); /*? result */
    });
  });/*  */