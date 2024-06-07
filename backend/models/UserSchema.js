const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String, 
        required: true,
        unique: true, 

    },
    password: {
    type: String,
    required: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
    },
    address: {
            houseNO:{
                type:String,
            },
            street:{
                type:String,
            },
            city:{
                type: String,
            },
            state:{
                type:String,
            },
            country:{
                type:String,
            },
            pinode:{
                type:String,
            }
    
    p},honeNumber: { 
        type: String,
         required: true
        },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
        },

})

const Users = mongoose.model("User", userSchema);
module.exports = Users;