import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// will need conversion from reddit markdown syntax to html
const DynamicPost = ({ post, url }) => {
  // const seePostsOrComments = (obj, url) => {
  //   // Split the URL into parts
  //   const urlParts = url.split('/')
  //   // Get the last part of the URL
  //   const lastUrlPart = urlParts[urlParts.length - 1]
  //   // Check if the object's key value matches the last part of the URL
  //   return obj.id === lastUrlPart
  // }

  return (
    <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{post.author}</Card.Subtitle>
        <Card.Text>
          {post.selftext} <br /> <br />
          Comments: {post.num_comments}
        </Card.Text>

        <Link className='card-link' to={`/dynamicPost/${post.id}`}>
          See Post
        </Link>
        <Link className='card-link' to={post.url} target='_blank'>
          {post.subreddit}
        </Link>
      </Card.Body>
    </Card>
  )
}

export default DynamicPost
/*
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
          <p>Comments</p>
        )}
        */
