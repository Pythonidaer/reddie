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
  const {
    subreddit,
    author,
    // total_awards_received: awards_count,
    awards_count,
    body,
    // permalink: link,
    link,
    // ups: upvotes,
    upvotes,
  } = req.body

  // Need to figure out how to change the names of these values
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

  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

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

  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(404)
    throw new Error('Comment not found')
  }
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedTicket = await Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedTicket)
})

export { getComments, createComment, getComment, deleteComment, updateComment }
// export { getCommentById, getAllComments }
// export { getComments, handleUndefined, getCommentById, getAllComments }

/*
Section 19.135, Traversy writes this:

// @desc Get user tickets
// @route GET /api/tickets/me
// @access Private

const getComments = asyhncHandler(async (req, res) => {
  res.status(200).json({message: 'getComments'})
})

// @desc Create new ticket
// @route POST /api/tickets/me
// @access Private

const createComments = asyhncHandler(async (req, res) => {
  res.status(200).json({message: 'createComment'})
})

*/

/*
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
// const getCommentById = asyncHandler(async (req, res) => {
//   const comment = await Comment.findById(req.params.id)
//   if (comment) {
//     res.json(comment)
//     console.log('Success')
//   } else {
//     console.log(req)

//     res.status(404)
//     throw new Error('Comment not found')
//   }
// })

// @desc Fetch all comments by user token
// @route GET /api/comments/all
// @access Private
// const getAllComments = asyncHandler(async (req, res) => {
//   const comment = await Comment.findById(req.params.id)
//   if (comment) {
//     res.json(comment)
//     console.log('Success')
//   } else {
//     console.log(req)

//     res.status(404)
//     throw new Error('Comment not found')
//   }
// })
