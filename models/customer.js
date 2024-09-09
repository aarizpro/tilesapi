const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
    {
        custName:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        custMobile:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        custAddr:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        custPincode:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        custEmail:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        custGstNo:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        custDesc:{
            type: String,
            required:[true,"Enter Shop Details"]
        }
    },
    {
        timestamps: true
    }
)

const customerDetails = mongoose.model("Customers",customerSchema);

module.exports= customerDetails;