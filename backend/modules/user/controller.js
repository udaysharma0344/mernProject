const userModel = require('../../models/UserSchema');

const singupController = async (req,res)=>{
        try {
            const {name , email , phoneNumber , password , address , role} = req.body;
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

module.exports = {singupController};