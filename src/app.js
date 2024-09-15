import userRouter from './routes/user.routes.js'
import express from "express"
import cookieParser from "cookie-parser"

import cors from "cors"


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

const app = express()
app.use("/api/v1/users", userRouter)

// Corrected URL
// http://localhost:8000/api/v1/users/register

export { app }
