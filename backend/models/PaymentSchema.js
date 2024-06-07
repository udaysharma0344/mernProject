const monggose = require('mongoose')

const PaymentSchema = new monggose.Schema({
    transition_id:{
        type: String,
        required: true,
        unique: true,
    },
    order_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', 
        required: true 
    
    },
    payment_method: { 
        type: String, 
        enum: ['credit card', 'upi'], 
        required: true 

    },
    payment_status: { 
        type: String, 
        enum: ['pending', 'completed', 'failed'], 
        default: 'pending'

    },
    amount: { 
        type: Number, 
        required: true 

    },
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);
