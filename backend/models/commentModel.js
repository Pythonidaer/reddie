import mongoose from 'mongoose'

// Define the comment schema
const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // References the 'User' model
    },
    subreddit: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    awards_count: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields with timestamps
  }
)

// Create the Comment model using the comment schema
const Comment = mongoose.model('Comment', commentSchema)

// Export the Comment model
export default Comment
/*
In this code, a Mongoose schema is defined for the Comment model. The schema defines the structure and validation rules for comment documents in the MongoDB collection. Each field in the schema has a specified type and can have additional properties like required, ref, and default.

The Comment model is created using the schema, which allows you to interact with the comments collection in MongoDB. The model is exported to be used in other files.

The schema includes a timestamps option set to true, which adds createdAt and updatedAt fields to the documents. These fields automatically record the creation and modification timestamps for each comment document.
*/
