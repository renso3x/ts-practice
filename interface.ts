// Always Capitalize
// Generic name to describe a interface
interface Reportable {
  summary(): string; // function returns a string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

/**
[Long annotation]

vehicle: {
  name: string;
  year: number;
  broken: boolean;
}
 */
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
