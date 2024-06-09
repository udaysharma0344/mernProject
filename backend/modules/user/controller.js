const userModel = require('../../models/UserSchema');
const JWT = require('jsonwebtoken');


// singup Controller
const singupController = async (req,res)=>{
        try {
            const {name , email , phoneNumber , password , address , role} = req.body;
            // chacking if user allready exists 
            const isUserExists = await userModel.find({
                $or:
                [{email}, {phoneNumber}]
            })

            if(isUserExists.length){
                throw new Error('User Exist with given email and phone')
            }

            const newUser = new userModel({name, email, phoneNumber, password , address, role});
            await newUser.save();
            return res.status(201).json({
                newUser, 
                message: 'User Created Successfully'
            })
        } catch (error) {
            return res.status(400).json({
                message: error.message,
                code: error.code || '400'
            })
        }
}

// Singin Controller

const singinController = async (req,res)=>{
    try {

        const {email , password} = req.body

    // chacking is user exists
    const user = await userModel.findOne({email});
    if(!user){
        throw new Error('Invalid email or password')
    }

    // matching the given password
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        throw new Error('Invalid email or password')
    };

    // generating JWT
    const token = await JWT.sign({_id: user._id}, process.env.JWT_KEY, {expiresIn: "1d"})

    res.status(200).send({
        status:true, 
        message:"Login Successfully",
        token,
        user:{
            name: user.name, 
            email : user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
        }
    })

        
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            code: error.code || '400'
        })
    }

}



module.exports = {singupController , singinController};