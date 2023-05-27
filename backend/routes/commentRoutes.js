import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import {
  getComments,
  createComment,
  getComment,
  updateComment,
  deleteComment,
} from '../controllers/commentController.js'

router.route('/').get(protect, getComments).post(protect, createComment)
router
  .route('/:id')
  .get(protect, getComment)
  .delete(protect, deleteComment)
  .put(protect, updateComment)

export default router
