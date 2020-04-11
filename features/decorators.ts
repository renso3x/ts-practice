@classDecorator
class Boat {
  color: string = 'red';

  @testDecorate
  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }

  @logError('Something bad happen!')
  pilot(
    @paramDecorator speed: string,
    @paramDecorator wake: boolean
  ): void {
    if(speed === 'fast') {
      return console.log('swish')
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function paramDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorate(target: any, key:string) {
  console.log(key)
}

// Return a factory decorator
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {

    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}


new Boat().pilot('fast', true);