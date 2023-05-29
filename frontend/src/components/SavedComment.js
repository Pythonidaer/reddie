import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card } from 'react-bootstrap'
import { deleteComment } from '../features/comments/commentSlice'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { parse } from 'marked'
import ShowMoreText from 'react-show-more-text'

// SavedComment component
function SavedComment({ comment }) {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()
  /*
  The useNavigate hook from react-router-dom is used to access the navigation object for programmatic navigation. It allows us to navigate to different routes within the application.
window.location.href retrieves the current URL of the page.
url.split('/') splits the URL into an array of parts using the / delimiter.
*/
  const navigate = useNavigate()
  const url = window.location.href
  const parts = url.split('/')

  const seeCommentLinkCondition = () => {
    // Get the last part of the URL
    const lastUrlPart = parts[parts.length - 1]
    // Check if the url is the Saved /comments screen or not
    return lastUrlPart === 'comments'
  }
  seeCommentLinkCondition()

  /*
  The handleButtonClick function is called when the delete button is clicked.
e.preventDefault() prevents the default behavior of the button, which is to submit a form or navigate to a new page.
dispatch(deleteComment(comment._id)) dispatches the deleteComment action with the comment ID to delete the comment.
The conditional statement checks if the last part of the URL is 'comments'. This is done to determine the current page context.
If the current page is the comments page, window.location.reload() is called to refresh the page and reflect the deleted comment. This is necessary because the comment might be deleted from a list of comments on the comments page itself. Previously this did not automatically update
If the current page is not the comments page, navigate('/comments') is called to navigate the user to the comments page after deleting the comment.

In summary, the code initializes the navigate variable using useNavigate to access the navigation object. It retrieves the current URL and splits it into an array of parts. The handleButtonClick function is responsible for deleting the comment, and depending on the current page context, it either reloads the page or navigates to the comments page after the deletion.
*/
  function handleButtonClick(e) {
    e.preventDefault()
    dispatch(deleteComment(comment._id))
    if (parts[parts.length - 1] === 'comments') {
      window.location.reload()
    } else {
      navigate('/comments')
    }
  }

  // useEffect to handle success and error messages
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/comments')
    }
  }, [dispatch, isError, isSuccess, navigate, message])

  // Render spinner component if still loading
  if (isLoading) {
    return <Spinner />
  }

  // Convert Reddit API's returned markdown to HTML and set dangerously
  const html = parse(comment.body, {
    silent: true,
  })

  return (
    <Card
      className='my-3 p-1 rounded'
      style={{
        width: '100%',
        margin: '0 auto',
        '@media (maxWidth: 767px)': {
          maxWidth: '18rem',
        },
        '@media (minWidth: 768px)': {
          maxWidth: '800px',
        },
        '@media (minWidth: 992px)': {
          maxWidth: '800px',
        },
      }}
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
        {seeCommentLinkCondition() ? (
          <>
            <div className='d-flex justify-content-between align-items-center'>
              <Link
                className='btn btn-secondary'
                to={`https://www.reddit.com${comment.link}`}
                target='_blank'
              >
                View on Reddit
              </Link>
              <Link to={`/comment/${comment._id}`} className='btn btn-success'>
                See Comment
              </Link>
            </div>

            <div className='d-flex justify-content-end mt-2'>
              <Button
                type='Button'
                className='btn btn-primary'
                disabled={!user}
                onClick={handleButtonClick}
              >
                <i className={'far fa-trash-can'}></i>
              </Button>
            </div>
          </>
        ) : (
          <div className='d-flex justify-content-between align-items-center'>
            {/* Link to view comment on Reddit */}
            <Link
              className='btn btn-secondary'
              to={`https://www.reddit.com${comment.link}`}
              target='_blank'
            >
              View on Reddit
            </Link>
            {/* Button to delete comment */}
            <Button
              type='Button'
              className='btn btn-primary'
              disabled={!user}
              onClick={handleButtonClick}
            >
              <i className={'far fa-trash-can'}></i>
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default SavedComment
/*
This is basically what I would be looking for for times when not on the single save screen
            <div className='d-flex justify-content-between align-items-center'>
              <Link
                className='btn btn-secondary'
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
*/
/*
    <Card
      className='my-3 p-3 rounded'
      style=width: '18rem', margin: '0 auto' 
    >    
The component receives a comment prop representing the comment object to be displayed.
It uses Redux's useSelector hook to access the user and comment-related states from the Redux store.
The component uses Redux's useDispatch hook to dispatch the deleteComment action.
The useNavigate hook from react-router-dom is used to access the navigation object for programmatic navigation.
The component defines a handleButtonClick function that is called when the delete button is clicked. It dispatches the deleteComment action and handles the navigation based on the current URL.
The useEffect hook is used to handle success and error messages. It displays an error toast if there is an error and navigates to the comments page if the delete operation is successful.
If the component is still loading (isLoading is true), it renders a spinner component.
The marked library is used to convert the Reddit API's returned markdown to HTML, and it is set as dangerouslySetInnerHTML in the card's text content.
The component renders the comment author, subreddit, comment body (with "Show more" functionality), upvotes count, and buttons to view the comment on Reddit and delete the comment.

Overall, the SavedComment component is responsible for rendering a card with the details of a saved comment and providing functionality to delete the comment.
*/
