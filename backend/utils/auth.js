const jwt = require("jsonwebtoken")
const userModel = require("../models/UserSchema")


async function authenticate(req, res, next) {
    try {
        // Extract token from the Authorization header
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            throw new Error('No token provided');
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        // Extract userId from the decoded token
        const { _id } = decoded;

        // Find the user by ID
        const user = await userModel.findById(userId);
        if (!user) {
            throw new Error('User not valid');
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({
            message: error.message || 'Something went wrong',
            code: error.code || 400,
        });
    }
}


async function createToken(payLoad) {
    try{
        const token = jwt.sign(payLoad, process.env.JWT_KEY, {expiresIn: "7d"})
        return token
    }
    catch(error){
        "error forwarding: error in creating token"
    }
}


module.exports = {authenticate,createToken};