import { Router, Response, Request, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

// middleware
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  // check req.session
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <p>You are now logged in</p>
        <a href='/logout'>Logout</a>
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
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user");
})

export { router };