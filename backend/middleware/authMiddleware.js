import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// Middleware to protect routes by checking for a valid token
const protect = asyncHandler(async (req, res, next) => {
  let token

  // Check if token is present in the headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get the token from the header
      token = req.headers.authorization.split(' ')[1]
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // Get the user associated with the token and exclude the password field
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  // If token is not found
  if (!token) {
    res.status(401)
    throw new Error('Not authorized')
  }
})

export { protect }
/*
Future idea: Let admin use saved comments for blogging functionality
// This relates to a tutorial idea I had after watching Andrew Mead do one with Gatsby, GraphQL and Contentful CMS
// 
// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next()
//   } else {
//     res.status(401)
//     throw new Error('Not authorized as an admin')
//   }
// }

// export { protect, admin }
*/
