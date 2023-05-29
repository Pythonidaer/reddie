import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getComment } from '../features/comments/commentSlice'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import SavedComment from '../components/SavedComment'

import { Row, Col, Container } from 'react-bootstrap'

const SavedCommentScreen = () => {
  // Retrieve the comment from the comments slice in the Redux store
  const { comment } = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  // Retrieve the commentId from the URL parameters
  const { commentId } = useParams()

  useEffect(() => {
    // Dispatch the getComment action to fetch the comment based on the commentId
    dispatch(getComment(commentId)).unwrap().catch(toast.error)
  }, [commentId, dispatch])

  // Render a spinner if the comment is not yet available
  if (!comment) {
    return <Spinner />
  }

  return (
    <>
      {/* Go Back link */}
      <Link className='btn btn-dark my-3' to='/comments'>
        Go Back
      </Link>
      <SavedComment comment={comment} />
    </>
  )
}

export default SavedCommentScreen
/*
       Container 
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center'>
             Display the SavedComment component 
            <SavedComment comment={comment} />
          </Col>
        </Row>
      </Container>
This code represents a screen that displays a saved comment in a React application. It fetches the comment based on the commentId from the URL parameters using Redux and dispatches the getComment action. The component renders a spinner while the comment is being fetched, and then displays the comment using the SavedComment component.
*/
