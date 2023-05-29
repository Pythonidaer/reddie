import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

/* ==========================================================
    THE FOLLOWING IS FROM TRAVERSY'S REACT F2B TUTORIAL
========================================================== */

// Handler for registering a new user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  // Validation: Check if all required fields are provided
  if (!username || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  // Check if user with the same email already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash the user's password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create the user in the database
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  })

  // If user creation is successful, send a response with user details and a generated token
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// Handler for getting the current user
const getMe = asyncHandler(async (req, res) => {
  // Retrieve the current user from the request object
  const user = {
    id: req.user._id,
    email: req.user.email,
    username: req.user.username,
  }
  res.status(200).json(user)
})

// Handler for user login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Find the user in the database by their email
  const user = await User.findOne({ email })

  // Check if user exists and if the provided password matches the hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    // If the login is successful, send a response with user details and a generated token
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    // If the login is unsuccessful, return an error response
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

export { registerUser, loginUser, getMe }
/*
The code handles user registration, user login, and retrieving the current user.
The registerUser function is an async handler that handles the registration of a new user.
It validates that all required fields (username, email, password) are provided.
It checks if a user with the same email already exists in the database.
It hashes the user's password using bcrypt before storing it in the database.
It creates a new user document in the database using the User model.
If the user creation is successful, it sends a response with the user details and a generated token for authentication.
The getMe function retrieves the current user's details from the request object and sends a response with the user information
*/
