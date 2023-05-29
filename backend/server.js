import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

// store items like our Mongo URI and JWT secret privately
dotenv.config()

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/comments', commentRoutes)

// Serve Frontend
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the frontend build directory
  // ties into the root package.json heroku-postbuild as well as the build script in frontend/ package.json
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  // Serve the index.html file for all other routes in production
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  // Default route for non-production environments
  app.get('/', (req, res) => {
    res.send('API is running....')
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
