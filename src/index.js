import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

//dotenv configure
import dotenv from "dotenv"
dotenv.config({
     path: './.env'
})
const PORT = process.env.PORT || 4500

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

import connectDB from "../db/database.js"

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

