const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const PORT = process.env.PORT;
const mongoose = require('mongoose')
const requireAuth = require('./middleware/requireAuth')

//firebase config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSEtsz6UtBV9qAqnB99TdWLKDp_mxMNDQ",
  authDomain: "backend-workout.firebaseapp.com",
  projectId: "backend-workout",
  storageBucket: "backend-workout.appspot.com",
  messagingSenderId: "942750784750",
  appId: "1:942750784750:web:e1e2cac2a02ea0b39567ff",
  measurementId: "G-KT116WRNR5"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);
const analytics = getAnalytics(apps);
// Note: This option uses the modular JavaScript SDK

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
        console.log(`wow server listning http://localhost:${PORT}/api/v1/products`);
    })

}).catch((err)=>{
    console.log(err)
})

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)




