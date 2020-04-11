import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrr');
  }
}
// decorator factory
function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}
/**
 * @param target constructor of Plane
 */
function controller(target: typeof Plane) {
  // get all methods in our object
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    console.log(path);
  }
}

// Retrieving the meta data from the object
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);
