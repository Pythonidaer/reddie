import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CommentThread = ({ comments }) => {
  //   const filteredComments = comments.filter(
  //     (comment) => comment.data && Object.keys(comment.data).length !== 0
  //   )

  //   const filteredComments = comments.filter(
  //     (comment) => comment.data && Object.keys(comment.data).length !== 0
  //   )

  const filteredComments = comments.filter(
    (comment) =>
      comment.hasOwnProperty('body') && !comment.hasOwnProperty('kind')
  )

  filteredComments.forEach((comment) => console.log(Object.keys(comment)))
  return (
    <>
      {filteredComments.map((comment, i) => (
        <Card
          key={comment.id}
          className='p-3'
          style={{ marginLeft: `${comment.level}rem` }}
        >
          <Card.Body>
            <Card.Title>
              Author: {comment.author} | Upvotes: {comment.upvotes}
            </Card.Title>
            <Card.Text>{comment.body}</Card.Text>
            {comment.replies && <CommentThread comments={comment.replies} />}
            <Link
              className='card-link'
              to={`https://www.reddit.com${comment.link}`}
              target='_blank'
            >
              View on Reddit
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default CommentThread
