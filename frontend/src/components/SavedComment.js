import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card } from 'react-bootstrap'
import { deleteComment } from '../features/comments/commentSlice'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { parse } from 'marked'
import ShowMoreText from 'react-show-more-text'

function SavedComment({ comment }) {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const url = window.location.href
  const parts = url.split('/')

  function handleButtonClick(e) {
    e.preventDefault()
    dispatch(deleteComment(comment._id))
    if (parts[parts.length - 1] === 'comments') {
      window.location.reload()
    } else {
      navigate('/comments')
    }
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

  // convert Reddit API's returned markdown to HTML and set dangerously
  const html = parse(comment.body, {
    silent: true,
  })

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

        {comment.body ? (
          <ShowMoreText
            lines={3}
            more='View'
            less='Hide'
            anchorClass='text-info fw-bold'
            className='card-text'
            // below default is ...
            truncatedEndingComponent=' '
          >
            <Card.Text dangerouslySetInnerHTML={{ __html: html }} />
          </ShowMoreText>
        ) : (
          <Card.Text>{comment.body}</Card.Text>
        )}

        <Card.Text>
          <i className='fa-solid pr-3 fa-thumbs-up'></i>
          {' ' + comment.upvotes}
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
            <i className={'far fa-trash-can'}></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SavedComment
