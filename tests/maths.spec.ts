//import * as m from '../src/maths';
import {sum} from '../src/maths';

 describe('Add Numbers', () => {
    it('should add two numbers', () => {
      expect(sum(5,10)).toEqual(15); /*? result */
    });
  });