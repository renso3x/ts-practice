import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods'

export function controller(routePrefix: string) {
  // Function will be refering to the Class
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method: Methods = Reflect.getMetadata('method', target.prototype, key);

      if (path) {
        // attach the route
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  }
}