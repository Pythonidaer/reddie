import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
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
    selftext: {
      type: String,
      required: false,
    },
    author_fullname: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    subreddit_name_prefixed: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    ups: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    created: {
      type: Number,
      required: true,
    },
    subreddit_id: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    num_comments: {
      type: Number,
      required: true,
    },
    permalink: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    created_utc: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

const Post = mongoose.model('Post', postSchema)

export default Post
