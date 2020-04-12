import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Not permitted');
  return;
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    // check req.session
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <p>You are now logged in</p>
          <a href='/auth/logout'>Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <p>You are not logged in</p>
          <a href='/auth/login'>Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to protected route, logged in user");
  }

}