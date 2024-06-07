const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
   
    name: {
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String, 
        required:true, 
    },
    images:[{
        type:String, 
        required:true,
    }],
    quantity:{
        type:Number,
        require:true, 
    },
    category_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true },
},{timestamps: true})