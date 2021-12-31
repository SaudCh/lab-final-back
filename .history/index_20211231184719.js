import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import userRouter from './routes/userRoutes.js'

const app = express()
app.use(bodyParser.json({ extended: true }))
app.use(cors())
app.use("/user", userRouter)

const url = "mongodb+srv://test:Test.1234@cluster0.l7gmh.mongodb.net/hello?retryWrites=true&w=majority"
mongoose.connect(url).then(() => {
    console.log("Connected to db")
    app.listen(5000)
}).catch((err) => { console.log(err) })