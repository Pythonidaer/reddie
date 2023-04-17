import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import posts from './data/posts.js'
import comments from './data/comments.js'
import User from './models/userModel.js'
import Post from './models/postModel.js'
import Comment from './models/commentModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const allPosts = []
posts.forEach((post) => {
  allPosts.push(post.data)
})

const allComments = []
comments.forEach((comment) => {
  allComments.push(comment.data)
})

const importData = async () => {
  try {
    await Post.deleteMany()
    await User.deleteMany()
    await Comment.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const samplePosts = allPosts.map((post) => {
      return { ...post, user: adminUser }
    })

    const sampleComments = allComments.map((comment) => {
      return { ...comment, user: adminUser }
    })

    await Post.insertMany(samplePosts)
    await Comment.insertMany(sampleComments)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Post.deleteMany()
    await User.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
