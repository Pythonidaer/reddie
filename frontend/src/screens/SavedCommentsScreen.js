import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments, reset } from '../features/comments/commentSlice'
import Spinner from '../components/Spinner'
import SavedComment from '../components/SavedComment'
import { Row, Col, Alert } from 'react-bootstrap'
import FilterBox from '../components/FilterBox'

const SavedCommentsScreen = () => {
  // Retrieve the comments, isLoading, and isSuccess state from the comments slice in the Redux store
  const { comments, isLoading, isSuccess } = useSelector(
    (state) => state.comments
  )
  const [filteredComments, setFilteredComments] = useState(comments)

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

      <FilterBox
        comments={comments}
        setFilteredComments={setFilteredComments}
      />

      {/* Display the saved comments */}
      <Row>
        {filteredComments.length === 0
          ? comments.map((comment) => (
              <Col key={comment._id} sm={12} md={6} lg={4} xl={3}>
                <SavedComment key={comment._id} comment={comment} />
              </Col>
            ))
          : filteredComments.map((comment) => (
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
This needs the e.target.value passed to the parent component:
{filteredComments.length === 0 && searchTerm.length > 0 && (
  <Alert variant='info'>
    No comments found with search phrase: <strong>{searchTerm}</strong>
  </Alert>
)}

This involves changes to both files. That way, an alert can appear when no results come back.

Add this back in if complaints about 
FilterBox result in slowed performance
<Row>
{comments.map((comment) => (
  <Col key={comment._id} sm={12} md={6} lg={4} xl={3}>
    <SavedComment key={comment._id} comment={comment} />
  </Col>
))}
</Row>
This code represents a screen that displays a list of saved comments in a React application. It retrieves the comments, isLoading, and isSuccess state from the comments slice in the Redux store using useSelector. It dispatches the getComments action to fetch the saved comments and handles the cleanup by resetting the comments state when the component is unmounted. The component renders a spinner while the comments are being fetched and then displays the saved comments using the SavedComment component within a Row and Col layout.
*/
