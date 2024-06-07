const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
   
    name:{
        type:String, 
        required:true,
    },
    description: {
        type:String, 
        required: true, 
    },
    parent_category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }

},{timestamps:true})

module.exports = mongoose.model('Product',CategorySchema);