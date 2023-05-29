import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'
import User from '../models/userModel.js'

// @desc Get user comment
// @route GET /api/comments/me
// @access Private
/*
POTENTIAL BUG: I think right now,
When there are no comments to fetch for a user,
We get a 404:
api/comments/:1
*/
const getComments = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Find all comments associated with the user
  const comments = await Comment.find({ user: req.user.id })
  res.status(200).json(comments)
})

// @desc Get user comment
// @route GET /api/comments/:id
// @access Private
const getComment = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Find the comment by ID
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }
  res.status(200).json(comment)
})

// @desc Create new comment
// @route POST /api/comments/me
// @access Private
const createComment = asyncHandler(async (req, res) => {
  const { subreddit, author, awards_count, body, link, upvotes } = req.body

  if (
    !subreddit ||
    !author ||
    awards_count === 'undefined' ||
    !link ||
    upvotes === 'undefined'
  ) {
    res.status(400)
    console.log(req.body)
    throw new Error(
      `One of these were not provided: subreddit: ${subreddit}, author: ${author}, awards_count: ${awards_count}, link: ${link}, upvotes: ${upvotes}.`
    )
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Create a new comment
  const comment = await Comment.create({
    subreddit,
    author,
    awards_count,
    link,
    upvotes,
    body,
    user: req.user.id,
    status: 'new',
  })

  res.status(201).json(comment)
})

// @desc Delete comment
// @route DELETE /api/comments/:id
// @access Private
const deleteComment = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Find the comment by ID
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  // Delete the comment
  await Comment.findByIdAndDelete(req.params.id)

  res.status(200).json({ success: true })
})

// @desc Update comment
// @route PUT /api/comments/:id
// @access Private
const updateComment = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Find the comment by ID
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  // Update the comment with the provided data
  const updatedComment = await Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedComment)
})

export { getComments, createComment, getComment, deleteComment, updateComment }
/*
The code handles fetching, creating, updating, and deleting comments for a user.
The getComments function retrieves all comments associated with the authenticated user.
The getComment function retrieves a specific comment by its ID, but only if it belongs to the authenticated user.
The createComment function creates a new comment in the database with the provided data, associated with the authenticated user.
The deleteComment function deletes a comment by its ID, but only if it belongs to the authenticated user.
The updateComment function updates a comment with new data, but only if it belongs to the authenticated user.
Each handler first retrieves the user using the ID from the JSON Web Token (JWT) in the request.
If the user is not found, it returns a 401 Unauthorized response.
For some operations (like getting a specific comment), it checks if the comment belongs to the authenticated user before proceeding.
If the comment is not found or the user is not authorized, it returns an appropriate error response.
If the operations are successful, the handlers return the corresponding responses with the requested data or success status.
*/
