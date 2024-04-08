const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const PORT = process.env.PORT;
const mongoose = require('mongoose')
const requireAuth = require('./middleware/requireAuth')

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
        console.log(`wow server listning http://localhost:${PORT}/api/workouts`);
    })

}).catch((err)=>{
    console.log(err)
})

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)




