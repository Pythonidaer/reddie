import express from 'express'

// Create an instance of the Express router
const router = express.Router()

import { protect } from '../middleware/authMiddleware.js'
import {
  getComments,
  createComment,
  getComment,
  updateComment,
  deleteComment,
} from '../controllers/commentController.js'

// Route for fetching all comments and creating a new comment
router
  .route('/')
  .get(protect, getComments) // GET request to fetch all comments
  .post(protect, createComment) // POST request to create a new comment

// Route for getting a specific comment, updating a comment, and deleting a comment
router
  .route('/:id')
  .get(protect, getComment) // GET request to fetch a specific comment by ID
  .delete(protect, deleteComment) // DELETE request to delete a specific comment by ID
  .put(protect, updateComment) // PUT request to update a specific comment by ID

// Export the router
export default router
