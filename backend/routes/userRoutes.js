import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'

import {
  loginUser,
  registerUser,
  getMe,
} from '../controllers/userController.js'

import { protect } from '../middleware/authMiddleware.js'

// @desc Fetch all posts
// @route GET /api/posts
// @access Public

/* ==========================================================
    THE FOLLOWING IS FROM TRAVERSY'S REACT F2B TUTORIAL
========================================================== */

// Route to register a new user
router.post('/', registerUser)

// Route to log in a user
router.post('/login', loginUser)

// Route to get the currently logged-in user's details
router.get('/me', protect, getMe)

export default router
/* 
Need to better understand how the above
relates to the front end/Redux 
For example, what does the /me route even do? 
 */
