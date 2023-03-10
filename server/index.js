import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";


dotenv.config();

 const app = express();

 
 app.use(bodyParser.json({limit: "30mb",extended: true}));
 app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
 app.use(cors());

 app.use('/posts', postRoutes);
 app.use("/user", userRouter);

 app.get('/',(req, res) => {
    res.send('APP is running');
 });

 const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL ,{ useNewUrlParser: true, useUnifiedTopology: true})
//if connection is successful
    .then(()=> app.listen((PORT), () =>console.log(`server running on port: ${PORT}`)))
    //if connection fails
    .catch((error)=>console.log(error));

//mongoose.set('useFindAndModify',false);
