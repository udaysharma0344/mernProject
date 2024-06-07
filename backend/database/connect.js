const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connectDB = async ()=>{
    const URL = process.env.DB_URL;
    try{
        const conn = await mongoose.connect(URL);
        console.log(`Connected To MongoDB Database`);
    }
    catch(error){
        console.log(`Error in MongoDB ${error}`);
    }
}

module.exports = connectDB;