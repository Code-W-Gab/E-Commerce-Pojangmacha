import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './Config/db.mjs'
import FoodRoutes from './Routes/FoodRoutes.mjs'
import path from "path";

const app = express()
app.use(express.json())
app.use(cors({
  origin: [
    process.env.FRONTEND_URL
  ],
  credentials: true
}))

// MongoDb
connectDB()

// Routes
app.use('/api/food', FoodRoutes)
app.use("/uploads", express.static(path.resolve("uploads")));
 

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})