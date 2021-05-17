/**
 * Takes two numbers and returns their sum
 * @param a first input to sum
 * @param b second input to sum
 * @returns sum of a and b
 */
export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  return a / b;
}


export function subtract(a: number, b: number){
  return a - b;
}

/**https://stackoverflow.com/a/40270735 */
export const doubleNumber =  (a: number) : number => a * 2;

export default function HelloWorld():string {return 'Hello World'};