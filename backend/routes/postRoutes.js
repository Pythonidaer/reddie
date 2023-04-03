import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'

import {
  getPosts,
  handleUndefined,
  getPostById,
} from '../controllers/postController.js'

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
router.route('/').get(getPosts)
router.route('/undefined').get(handleUndefined)
router.route('/:id').get(getPostById)

export default router
