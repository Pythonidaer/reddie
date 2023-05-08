import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card } from 'react-bootstrap'
import { deleteComment, reset } from '../features/comments/commentSlice'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'

function SavedComment({ comment }) {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleButtonClick(e) {
    e.preventDefault()
    dispatch(deleteComment(comment._id))
    window.location.reload()
  }

  //   Reset seemed to cause issues so commented out for now
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/comments')
    }
  }, [dispatch, isError, isSuccess, navigate, message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Card
      className='my-3 p-3 rounded'
      style={{ width: '18rem', margin: '0 auto' }}
    >
      <Card.Body>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {comment.subreddit}
        </Card.Subtitle>
        <Card.Text>
          {comment.body} <br />
          <br />
          <i className='fa-solid fa-thumbs-up'></i>
          <span> {comment.upvotes}</span>
        </Card.Text>

        <div>
          <Link
            className='card-link'
            to={`https://www.reddit.com${comment.link}`}
            target='_blank'
          >
            View on Reddit
          </Link>
          <Link to={`/comment/${comment._id}`} className='card-link'>
            See Comment
          </Link>
        </div>
        <div>
          <Button
            variant='danger'
            type='Button'
            className='btn btn-success'
            disabled={!user}
            onClick={handleButtonClick}
          >
            <i className={'far fa-save'}></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SavedComment
