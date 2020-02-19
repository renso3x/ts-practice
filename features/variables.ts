// Type annotation;
let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 23, 2];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: string; y: number; z: boolean } = {
  x: '10',
  y: 20,
  z: true
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// use always type inference as always
// Never ever use 'any' type
// TS cannot trace what is happening in the code

// 1. Function that returns the 'any' type
//  You need to predict of the return when using the JSON.parse
const json = '{"x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json); // { x: 10, y: 20 }
console.log(coordinates);

// 2. When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWOrd: boolean;
// or let foundWOrd = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWOrd = true;
  }
}

// 3 Variable whose types cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number | string = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
