import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'

import {
  loginUser,
  registerUser,
  getMe,
} from '../controllers/userController.js'

// import {
//   authUser,
//   getUserSaves,
//   registerUser,
// } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
// router.route('/').post(registerUser)
// router.post('/login', authUser)
// router.route('/saved').get(protect, getUserSaves)

/* ==========================================================
    THE FOLLOWING IS FROM TRAVERSY'S REACT F2B TUTORIAL
========================================================== */

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

export default router
