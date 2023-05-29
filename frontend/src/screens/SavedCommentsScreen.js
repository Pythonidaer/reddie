import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments, reset } from '../features/comments/commentSlice'
import Spinner from '../components/Spinner'
import SavedComment from '../components/SavedComment'
import { Row, Col } from 'react-bootstrap'

const SavedCommentsScreen = () => {
  // Retrieve the comments, isLoading, and isSuccess state from the comments slice in the Redux store
  const { comments, isLoading, isSuccess } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()

  useEffect(() => {
    // Cleanup function to reset the comments state when the component is unmounted
    return () => {
      if (isSuccess) {
        // Dispatch the reset action to clear the comments state
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    // Dispatch the getComments action to fetch the saved comments
    dispatch(getComments())
  }, [dispatch])

  // Render a spinner while the comments are being fetched
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {/* Title */}
      <h1>Your Saved Comments</h1>

      {/* Display the saved comments */}
      <Row>
        {comments.map((comment) => (
          <Col key={comment._id} sm={12} md={6} lg={4} xl={3}>
            <SavedComment key={comment._id} comment={comment} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default SavedCommentsScreen
/*
This code represents a screen that displays a list of saved comments in a React application. It retrieves the comments, isLoading, and isSuccess state from the comments slice in the Redux store using useSelector. It dispatches the getComments action to fetch the saved comments and handles the cleanup by resetting the comments state when the component is unmounted. The component renders a spinner while the comments are being fetched and then displays the saved comments using the SavedComment component within a Row and Col layout.
*/
