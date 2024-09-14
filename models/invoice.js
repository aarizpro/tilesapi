const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
    {
        custName: {
            type: String,
            required: [true, "Enter Shop Details"]
        },
        custMobile: {
            type: String,
            required: [true, "Enter Shop Details"]
        },
        custGstNo: {
            type: String,
            required: [true, "Enter Shop Details"]
        },
        invDate: {
            type: String,
            required: [true, "Enter Shop Details"]
        },
        invNumber: {
            type: Number,
            required: [true, "Enter Shop Details"],
            default: 0
        },
        billValue: {
            type: String,
            required: [true, "Enter Shop Details"]
        },
        gstAmount: {
            type: String,
            required: [true, "Enter Shop Details"]
        },
        totalAmount: {
            type: String,
            required: [true, "Enter Shop Details"]
        }
    },
    {
        timestamps: true
    }
);

const invoiceMaster = mongoose.model("Invoices", invoiceSchema);

module.exports = invoiceMaster;
