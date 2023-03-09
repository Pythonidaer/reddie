import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
// import posts from './data/posts.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()

connectDB()

// const allPosts = []
// posts.forEach((post) => {
//   allPosts.push(post.data)
// })

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
