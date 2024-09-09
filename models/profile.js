const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
    {
        shopName:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopOwner:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopMobile:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopAddr:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopPincode:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopEmail:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopGstNo:{
            type: String,
            required:[true,"Enter Shop Details"]
        },
        shopGstPer:{
            type: String,
            required:[true,"Enter Shop Details"]
        }
    },
    {
        timestamps: true
    }
)

const profileDetails = mongoose.model("Profiles",profileSchema);

module.exports= profileDetails;