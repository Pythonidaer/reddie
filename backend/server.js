import express from 'express'
import dotenv from 'dotenv'
// import colors from 'colors'
import posts from './data/posts.js'

dotenv.config()

const allPosts = []
posts.forEach((post) => {
  allPosts.push(post.data)
})

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/posts', (req, res) => {
  res.send(allPosts)
})

app.get('/api/posts/:id', (req, res) => {
  const post = allPosts.find((p) => p._id === req.params.id)
  res.send(post)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    // `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)