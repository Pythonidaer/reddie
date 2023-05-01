import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('API is running...')
})

// Routes
app.use('/api/users', userRoutes)
app.use('/api/comments', commentRoutes)

// Serve Frontend
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  // FIX: below code fixes app crashing on refresh in deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Reddie API' })
  })
}

// Error Handling Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
