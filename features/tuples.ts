const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type alias -> reusable
type Drink = [string, boolean, number];

// consistent of ordering of element
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354
};
