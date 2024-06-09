const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors')


dotenv.config();


const connectDB = async ()=>{
    const URL = process.env.DB_URL;
    try{
        const conn = await mongoose.connect(URL);
        console.log(`Connected To MongoDB Database`.blue.bold);
    }
    catch(error){
        console.log(`Error in MongoDB ${error}`);
    }
}

module.exports = connectDB;