import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getComment } from '../features/comments/commentSlice'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import SavedComment from '../components/SavedComment'

import { Row, Col, Container } from 'react-bootstrap'

const SavedCommentScreen = () => {
  const { comment } = useSelector((state) => state.comments)
  const dispatch = useDispatch()
  const { commentId } = useParams()

  useEffect(() => {
    dispatch(getComment(commentId)).unwrap().catch(toast.error)
  }, [commentId, dispatch])

  if (!comment) {
    return <Spinner />
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/comments'>
        Go Back
      </Link>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center'>
            <SavedComment comment={comment} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SavedCommentScreen
