const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const Router = require("./routes/workout");
const PORT = process.env.PORT;
const mongoose = require('mongoose')


//body-parser for post new product 
app.use(bodyParser.urlencoded({extended:false}))
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})
//connect to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
app.use('/api/v1/products',Router)
        console.log(`wow server listning http://localhost:${PORT}/api/v1/products`);
    })

}).catch((err)=>{
    console.log(err)
})

//routes
app.use('/api/workouts',Router)



