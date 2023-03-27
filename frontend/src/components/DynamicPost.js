import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import axios from 'axios'
// import { Comment, CommentList } from './DynamicComments'

// will need conversion from reddit markdown syntax to html
// This component displays a single post from Reddit and can handle comments
const DynamicPost = ({ post, url }) => {
  // This function checks if the post should show a link to its comments or display them
  const seePostsOrComments = (obj, url) => {
    // Split the URL into parts
    const urlParts = url.split('/')
    // Get the last part of the URL
    const lastUrlPart = urlParts[urlParts.length - 1]
    // Check if the object's key value matches the last part of the URL
    return obj.id === lastUrlPart
  }

  // Use this function to log all child comments, but will need re-working
  // This function fetches all comments for a given child ID and logs them to the console
  async function getComments(childId) {
    const url = `https://www.reddit.com/comments/${post.id}/comment/${childId}.json`
    try {
      const response = await axios.get(url)
      const comments = response.data[1].data.children
      logAllComments(comments)
    } catch (error) {
      console.error(error)
    }
  }

  let commentLine = 1
  // This option works up until the point of the children data structure changing
  // This function logs all comments for a given post to the console
  function logAllComments(comments, level = 0) {
    comments.forEach((comment) => {
      if (comment.data.body !== undefined) {
        // skip logging undefined comment bodies
        const dashes = '-'.repeat(level) // generate dashes for indentation
        console.log(`${dashes}${comment.data.body}`, commentLine)
        commentLine++
      }

      if (
        comment.kind === 't1' &&
        comment.data.replies !== '' &&
        comment.data.replies !== undefined
      ) {
        logAllComments(comment.data.replies.data.children, level + 1) // increase level for child comments
      } else if (comment.kind === 'more') {
        comment.data.children.forEach((childId) => {
          getComments(childId)
        })
      }
    })
  }

  // This function fetches comments for a post and logs them to the console
  const handleClick = async () => {
    console.log(`${post.url}.json?limit=1`)
    try {
      const response = await axios.get(`${post.url}.json?limit=5`)
      const { children } = response.data[1].data
      logAllComments(children)
    } catch (error) {
      console.error(error)
    }
  }

  // This component renders a single post card with a link to its comments or a display of them
  return (
    <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{post.author}</Card.Subtitle>
        <Card.Text>
          {post.selftext} <br /> <br />
          Comments: {post.num_comments}
        </Card.Text>
        {!seePostsOrComments(post, url) ? (
          <div>
            <Link className='card-link' to={`/dynamicPost/${post.id}`}>
              See Post
            </Link>
            <Link className='card-link' to={post.url} target='_blank'>
              {post.subreddit}
            </Link>
          </div>
        ) : (
          <Link
            className='card-link'
            to={post.url}
            target='_blank'
            onClick={handleClick}
          >
            {post.subreddit}
          </Link>
        )}
      </Card.Body>
    </Card>
  )
}

export default DynamicPost
/* Changing Comments link from the post.subreddit to Comments */
/*
          <Link
            className='card-link'
            to={post.url}
            target='_blank'
            onClick={handleClick}
          >
            {post.subreddit}
          </Link>
*/
