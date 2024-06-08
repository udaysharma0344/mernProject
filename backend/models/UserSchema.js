const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: true,
        unique: true, 

    },
    email: {
        type: String,
        required: true, 
        unique: true,
    },
    phoneNumber: { 
        type: String,
        required: true
        },
    password: {
    type: String,
    required: true,
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
        },
    role:{
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
        },

},{timestamps:true},{ versionKey: false })


userSchema.pre('save', async function(next)  {
    const user = this;
  
    // Check if the password is modified or new
    if (!user.isModified('password')) {
        
      return next();
    }
  
    try {
      // Generate a salt
      const saltRounds = 10;
      
      // Hash the password with the salt
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  
      // Replace the plain text password with the hashed one
      user.password = hashedPassword;
  
      // Proceed to save the user
      next();
    } catch (err) {
      // If an error occurs, pass it to the next middleware

      next(err);
    }
  });
  
  // Method to compare passwords
//   userSchema.methods.comparePassword = async (candidatePassword)=>{
//     return bcrypt.compare(candidatePassword, this.password);
//   };
  


const Users = mongoose.model("User", userSchema);
module.exports = Users;