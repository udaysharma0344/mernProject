const validator = require('validator');

// Singup validator

const singupValidator = (req, res , next)=>{
    try {
        const { name, email, phoneNumber , password } = req.body;
        // for name
        if(!validator.isAlphanumeric(name)){
            throw new Error('Invalid name(must be Alphanumeric)')
        }
        if (!validator.isLength(name, { min: 3, max: 20 })) {
            throw new Error('Username must be between 3 and 20 characters long');
        }

        // for Email
        if(!validator.isEmail(email)){
            throw new Error('Invalid email address')
        }

        // for phoneNumber
        if(!validator.isMobilePhone(phoneNumber)){
            throw new Error('Invalid phone number')
        }

        // for password
        if(!validator.isLength(password, { min: 8 })){
            throw new Error('Password must be at least 8 characters long')
        }




        return next();


    } catch (error) {
        return res.status(400).json({
            message: error.message,
            code: error.code || '400'
        })
    }

}


// Singin Validator


const singinValidator = async (req, res, next)=>{
    try {
        const {email , password} = req.body;

    // for Email
    if(!validator.isEmail(email)){
        throw new Error('Invalid email address')
    }

     // for password
     if(!validator.isLength(password, { min: 8 })){
        throw new Error('Invalid Password')
    }

    return next();


    } catch (error) {
        return res.status(400).json({
            message: error.message,
            code: error.code || '400'
        })
        
    }


}


module.exports = {singupValidator, singinValidator }