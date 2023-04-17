import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import CommentThread from './CommentThread'
import axios from 'axios'

// will need conversion from reddit markdown syntax to html
// This component displays a single post from Reddit and can handle comments
const DynamicPost = ({ post, url }) => {
  const [comments, setComments] = useState([])

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

  function logAllComments(comments, level = 0) {
    let prevComments = [...comments] // make a copy of the previous comments

    comments.forEach((comment) => {
      if (comment.data.body !== undefined) {
        const newComment = {
          body: comment.data.body,
          upvotes: comment.data.ups,
          author: comment.data.author,
          link: comment.data.permalink,
          subreddit: comment.data.subreddit,
          awards_count: comment.data.total_awards_received,
          level,
        }

        // add the new comment to the previous comments
        prevComments = [...prevComments, newComment]
      }

      if (
        comment.kind === 't1' &&
        comment.data.replies !== '' &&
        comment.data.replies !== undefined
      ) {
        prevComments = [
          ...prevComments,
          ...logAllComments(comment.data.replies.data.children, level + 1),
        ]
      } else if (comment.kind === 'more') {
        comment.data.children.forEach(async (childId) => {
          try {
            const response = await axios.get(
              `https://www.reddit.com/comments/${post.id}/comment/${childId}.json`
            )
            const childComments = response.data[1].data.children
            prevComments = [
              ...prevComments,
              ...logAllComments(childComments, level + 1),
            ]
          } catch (error) {
            console.error(error)
          }
        })
      }
    })

    // update the state with the new comments
    setComments(prevComments)
    console.log('MyComponent state:', { comments })

    // return the comments so they can be used recursively
    return prevComments
  }

  const handleClick = async () => {
    console.log(`${post.url}.json?limit=1`)
    try {
      const response = await axios.get(`${post.url}.json`)
      const { children } = response.data[1].data
      logAllComments(children)
    } catch (error) {
      console.error(error)
    }
  }

  // This component renders a single post card with a link to its comments or a display of them
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card
        className='my-3 p-3 rounded'
        style={{ width: '18rem', margin: '0 auto' }}
      >
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {post.author}
          </Card.Subtitle>
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
            <div>
              <Button variant='primary' className='btn' onClick={handleClick}>
                {post.subreddit}
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      <CommentThread comments={comments} style={{ width: '36rem' }} />
    </div>
  )
}

export default DynamicPost
/*
DOES NOT WORK BECAUSE IT REPLACES THE STATE EACH TIME

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

  async function logAllComments(comments, level = 0) {
    let prevComments = [...comments] // make a copy of the previous comments

    for (const comment of comments) {
      if (comment.data.body !== undefined) {
        const newComment = {
          body: comment.data.body,
          upvotes: comment.data.ups,
          author: comment.data.author,
          link: comment.data.permalink,
          level,
        }

        // add the new comment to the previous comments
        prevComments = [...prevComments, newComment]
      }

      if (
        comment.kind === 't1' &&
        comment.data.replies !== '' &&
        comment.data.replies !== undefined
      ) {
        prevComments = [
          ...prevComments,
          ...(await logAllComments(
            comment.data.replies.data.children,
            level + 1
          )),
        ]
      } else if (comment.kind === 'more') {
        for (const childId of comment.data.children) {
          try {
            const response = await axios.get(
              `https://www.reddit.com/comments/${post.id}/comment/${childId}.json`
            )
            const childComments = response.data[1].data.children
            prevComments = [
              ...prevComments,
              ...(await logAllComments(childComments, level + 1)),
            ]
          } catch (error) {
            console.error(error)
          }

          // add a delay of 1 second before proceeding to the next fetch request
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      }
    }

    // update the state with the new comments
    setComments(prevComments)
    console.log('MyComponent state:', { comments })

    // return the comments so they can be used recursively
    return prevComments
  }
            */