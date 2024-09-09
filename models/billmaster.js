const mongoose = require("mongoose");

const billingSchema = mongoose.Schema(
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
        invoiceNo:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        invoiceDate:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        productCode:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        productName:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        unitPrice:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        billCount:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        billValue:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        gstValue:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        invoiceValue:{
            type: String,
            required:[true,"Enter Shop Details"]
        }
    },
    {
        timestamps: true
    }
)

const billMaster = mongoose.model("Billings",billingSchema);

module.exports= billMaster;