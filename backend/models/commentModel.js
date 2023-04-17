import mongoose from 'mongoose'

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
    timestamps: true,
  }
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
