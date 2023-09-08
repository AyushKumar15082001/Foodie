const { User } = require('../Models/users');
exports.signauth = (req, res, next) => {

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/
    const isPasswordValid = passwordRegex.test(req.body.password);
    if (!isPasswordValid) {
        return res.status(401).send({ message: 'Weak Password.' });
    }

    User.findOne({ email: req.body.email }).then(doc => {
        if (doc) {
            return res.status(401).send({ message: 'Email already exists. Try logging in' });
        }
        else next();
    }
    ).catch(err => {
        res.status(401).send(err);
    });
}