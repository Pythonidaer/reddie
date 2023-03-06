import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// will need conversion from reddit markdown syntax to html
const Post = ({ post }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{post.author}</Card.Subtitle>
        <Card.Text>
          {post.selftext} <br /> <br />
          Comments: {post.num_comments}
        </Card.Text>
        <Link className='card-link' to={`/post/${post._id}`}>
          See Post
        </Link>
        <Link className='card-link' to={post.url} target='_blank'>
          {post.subreddit}
        </Link>

        {/* <Card.Link href={`/post/${post._id}`}>See Post</Card.Link>
        <Card.Link href={post.url} target='_blank'>
          {post.subreddit}
        </Card.Link>  */}
      </Card.Body>
    </Card>
  )
}

export default Post

{
  /* 
<Card className='my-3 p-3 rounded'>
  <a href={`/product/${product._id}`}></a>
</Card>
*/
}
