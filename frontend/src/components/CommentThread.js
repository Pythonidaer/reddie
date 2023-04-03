import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

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
            <div className='d-flex justify-content-between align-items-center'>
              <Link
                className='card-link'
                to={`https://www.reddit.com${comment.link}`}
                target='_blank'
              >
                View on Reddit
              </Link>
              <Button variant='success' type='Button' disabled={false}>
                <i className={'far fa-save'}></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default CommentThread
