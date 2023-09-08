const jwt = require('jsonwebtoken');

exports.auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch(err) {
        res.status(401).send({error: 'Please authenticate'});
    }
}
