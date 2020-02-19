// Add as always [Type Annotation] on what to return of the function
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather // destructuring
}: {
  date: Date; // anotation
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWather);
