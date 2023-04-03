import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'

import { authUser, getUserSaves } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
router.post('/login', authUser)
router.route('/saved').get(protect, getUserSaves)

export default router
