const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        productName:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        productCode:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        productDesc:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        productUnitPrice:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        productGstPrice:{
            type: String,
            required:[true,"Enter Shop Details"]
        }
    },
    {
        timestamps: true
    }
)

const productDetails = mongoose.model("Product",productSchema);

module.exports= productDetails;