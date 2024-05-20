const jwt = require("jsonwebtoken");
const secret = "I can't believe this key is so secret!";
module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.token, secret, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}


// const jwt = require("jsonwebtoken");

// const authenticateToken = (req, res, next) => {
//     const token = req.cookies.usertoken || req.headers['authorization'].split(' ')[1];

//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, process.env.FIRST_SECRET_KEY, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

// Use this middleware for routes that require authentication



