import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, Button, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { createComment, reset } from '../features/comments/commentSlice'
import Spinner from '../components/Spinner'

const CommentThread = ({ comments }) => {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredComments = comments.filter(
    (comment) =>
      comment.hasOwnProperty('body') && !comment.hasOwnProperty('kind')
  )

  function handleButtonClick(e, comment) {
    e.preventDefault()
    dispatch(createComment(comment))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/comments')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container fluid>
      {filteredComments.map((comment, i) => (
        <Card
          key={i}
          className='p-3'
          style={{
            marginLeft: `${comment.level}rem`,
            maxWidth: '18rem',
          }}
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
              <Button
                variant='success'
                type='Button'
                className='btn btn-success'
                disabled={!user}
                onClick={(e) => handleButtonClick(e, comment)}
              >
                <i className={'far fa-save'}></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default CommentThread
