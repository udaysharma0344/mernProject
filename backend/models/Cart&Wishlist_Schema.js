const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['wishlist', 'cart'], 
        required: true 
        
    },
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    product_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true },
    quantity: { 
        type: Number, 
        required: true },
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);
