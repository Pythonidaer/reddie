import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import { protect } from '../middleware/authMiddleware.js'

import {
  getCommentById,
  getAllComments,
} from '../controllers/commentController.js'

// router.route('/').get(getPosts)
// router.route('/undefined').get(handleUndefined)
// router.route('/:id').get(getCommentById)
router.get('/all', protect, getAllComments)

/*
There needs to be another route for getting all comments for a certain user based off the user's id. The above only covers a comment's id, so is better for a specificCommentScreen. What is most necessary is an allCommentsScreen.
*/

export default router
