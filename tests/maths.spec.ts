import * as m from '../src/maths';
import {sum} from '../src/maths';

 describe('Add Numbers', () => {
    it('should add two numbers', () => {
      expect(m.sum(5,10)).toEqual(15); /*? result */
    });
  });/*  */


  describe('Subtract Numbers', () => {
    it('should subtract two numbers', () => {
      expect(m.subtract(10,5)).toEqual(5); /*? result */
    });
  });/*  */