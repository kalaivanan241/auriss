const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) {
        res.status(400).send('access denied');      // access denied if there is no token in header
    }
    try{
        const decoded =  jwt.verify(token,'token'); // verifying and decoding token.
        req.user = decoded;                         // decoded user is attached to req
        next();                                     // next pipeline function is called
    }catch(err) {
       res.status(400).send('invalid token');      // sending 400 error as response if token is not valid
    }
};
