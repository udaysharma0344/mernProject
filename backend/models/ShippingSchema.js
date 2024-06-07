const mongoose = require('mongoose')

const ShippingSchema = new mongoose.Schema({
    order_id: { 
       type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', 
        required: true 

    },
    shipping_address: { 
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
            pin_code:{
                type:String,
            }
    },
    shipping_method: { 
        type: String, 
        enum: ['standard', 'express'], 
        required: true 

    },
    tracking_number: { 
        type: String 

    },
    shipping_status: { 
        type: String, 
        enum: ['pending', 'shipped', 'delivered'], 
        default: 'pending' 
    },
}, { timestamps: true });

module.exports = mongoose.model('Shipping', ShippingSchema);

