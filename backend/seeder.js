import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import comments from './data/comments.js'
import User from './models/userModel.js'
import Comment from './models/commentModel.js'
import connectDB from './config/db.js'

dotenv.config()

// Connect to database
connectDB()

const allComments = []
comments.forEach((comment) => {
  allComments.push(comment.data)
})

// Import data from arrays into database
const importData = async () => {
  try {
    // Clear existing data from collections
    await User.deleteMany()
    await Comment.deleteMany()

    // Insert users data into User collection and get the created users
    const createdUsers = await User.insertMany(users)

    // Get the ID of the first created user (assuming it's the admin user)
    const adminUser = createdUsers[0]._id

    // Modify each comment by adding the admin user as the user reference
    const sampleComments = allComments.map((comment) => {
      return { ...comment, user: adminUser }
    })

    // Insert the modified comments into their respective collections
    await Comment.insertMany(sampleComments)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Delete all data from collections
const destroyData = async () => {
  try {
    await User.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Determine if importing or destroying data based on command-line argument
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
