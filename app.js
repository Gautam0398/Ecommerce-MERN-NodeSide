const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');




// middleware
console.log("****************morgan resuts************");
app.use(morgan('dev'));
console.log("****************morgan resuts************");
app.use(expressValidator());
app.use(cors());




//DB Setup
mongoose.connect("mongodb://localhost:27017/ECommerceDB", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true});
var DB = mongoose.connection;
DB.on("error", console.error.bind(console, "connection error:"));
DB.once("open", function () {
    console.log("we are connected to Mongo!");
});


//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())



// Routes middleware
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);



// Port Setup configuration
app.listen(port,()=>{
    console.log(`service running on ${port}`);
});
