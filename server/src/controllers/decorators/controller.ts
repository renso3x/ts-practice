import 'reflect-metadata';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys';

function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if(!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for(let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
      }
    }

    next();
  }
}

export function controller(routePrefix: string) {
  // Function will be refering to the Class
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares = Reflect.getMetadata(
        MetadataKeys.middleware,
        target,
        key
      ) || [];

      const requiredBodyProps = Reflect.getMetadata(
        MetadataKeys.validator,
        target.prototype,
        key
      ) || [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`, //path
          [...middlewares], //middlewares
          validator, //validator ['email', 'password']
          routeHandler //handler
        );
      }
    }
  }
}