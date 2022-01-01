import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
const path = require('path')


import userRouter from './routes/userRoutes.js'

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

app.use(bodyParser.json({ extended: true }))
app.use('/uploads/images', express.static(path.join('uploads', 'images')))
app.use("/user", userRouter)

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l7gmh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(url).then(() => {

    console.log("Connected to db")
    app.listen(process.env.PORT || 5000)
}).catch((err) => { console.log(err) })