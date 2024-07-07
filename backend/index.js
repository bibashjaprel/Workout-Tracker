const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const requireAuth = require('./middleware/requireAuth');
const connectDb = require('./dbconfig/connectdb');

connectDb();

//body-parser for post new product 
app.use(bodyParser.urlencoded({extended:false}))
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})


//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)




