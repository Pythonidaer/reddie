import React from 'react'
import { Card } from 'react-bootstrap'

const Post = ({ post }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{post.author}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br /> <br />
          Comments: {post.num_comments}
        </Card.Text>
        <Card.Link href={`/post/${post._id}`}>See Post</Card.Link>
        <Card.Link href='#'>{post.subreddit}</Card.Link>
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
