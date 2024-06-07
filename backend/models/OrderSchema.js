const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    shipping_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Shipping', 
        required: true 
    },
    payment_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment', 
        required: true 
    },
    total_amount: { 
        type: Number, 
        required: true 
    },
    order_status: { 
        type: String, 
        enum: ['pending', 'shipped', 'delivered', 'canceled'], 
        default: 'pending' 
    },
    
},{timestamps:true})

module.exports = mongoose.model('Order',OrderSchema)