"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// middleware
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    // check req.session
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <p>You are now logged in</p>\n        <a href='/logout'>Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <p>You are not logged in</p>\n        <a href='/auth/login'>Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send("Welcome to protected route, logged in user");
});
