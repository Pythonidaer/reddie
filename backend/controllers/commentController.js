import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'

/* I don't think there will be a need for this
// @desc Fetch all comments
// @route GET /api/comments
// @access Public
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({})

  res.send(comments)
})
*/

/* This might be the start of re-routing when a user deletes a comment
// @desc Fetch single comment
// @route GET /api/comments/undefined
// @access Private
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
*/

// @desc Fetch single comment
// @route GET /api/comments/"id"
// @access Private
const getCommentById = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)
  if (comment) {
    res.json(comment)
    console.log('Success')
  } else {
    console.log(req)

    res.status(404)
    throw new Error('Comment not found')
  }
})

// @desc Fetch all comments by user token
// @route GET /api/comments/all
// @access Private
const getAllComments = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)
  if (comment) {
    res.json(comment)
    console.log('Success')
  } else {
    console.log(req)

    res.status(404)
    throw new Error('Comment not found')
  }
})

export { getCommentById, getAllComments }
// export { getComments, handleUndefined, getCommentById, getAllComments }
