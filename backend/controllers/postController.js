import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})

  res.send(posts)
})

// @desc Fetch single post
// @route GET /api/posts/undefined
// @access Public
const handleUndefined = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (post) {
    res.json(post)
    console.log('Success')
  } else {
    console.log(req.params)
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc Fetch single post
// @route GET /api/posts/"id"
// @access Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (post) {
    res.json(post)
    console.log('Success')
  } else {
    console.log(req)

    res.status(404)
    throw new Error('Post not found')
  }
})

export { getPosts, handleUndefined, getPostById }
