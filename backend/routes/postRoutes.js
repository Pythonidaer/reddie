import express from 'express'
import asyncHandler from 'express-async-handler'
// import posts from '../data/posts.js'
import Post from '../models/postModel.js'
const router = express.Router()

// Not sure why but I did not need this so maybe the data in MongoDB looks different than the file.js
// I should figure out how to test data looks by comparison, bring it in, and console log both at once
// const allPosts = []
// posts.forEach((post) => {
//   allPosts.push(post.data)
// })

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const posts = await Post.find({})

    res.send(posts)
  })
)

// @desc Fetch all post
// @route GET /api/posts/"id"
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({ message: 'Post not found' })
    }
    res.send(post)
  })
)
export default router
