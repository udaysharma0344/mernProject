const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan');
const mongoose = require("mongoose");


const app = express();

dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



    
    const PORT = process.env.PORT;

    app.listen(PORT,()=>{
        console.log(`Server is running  on port ${PORT}`);
    })


 module.exports = app;