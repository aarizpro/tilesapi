require('dotenv').config();
 const express = require("express");
 const mongoose = require("mongoose");
const cors = require("cors");
const profile = require('./routes/profileRoute')
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const customer = require('./routes/customerRoute')
const product = require('./routes/productRoute')
const billing = require('./routes/billmasterRoute')
const invoice = require('./routes/invoiceRoute')
const app = express();

const PORT = process.env.PORT;
const MONGO_URL= process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/profile',profile);
app.use('/api/customer',customer);
app.use('/api/product',product);
app.use('/api/billing',billing);
app.use('/api/invoice',invoice);

mongoose.set("strictQuery",false)
mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB Connected")
    app.listen(PORT,()=>{
        console.log(`Node Connected via : ${PORT}`);

    });
}).catch((error)=>{
    console.log(error);
})
