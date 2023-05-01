import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments, reset } from '../features/comments/commentSlice'
import Spinner from '../components/Spinner'
import SavedComment from '../components/SavedComment'
import { Row, Col } from 'react-bootstrap'

const SavedCommentsScreen = () => {
  const { comments, isLoading, isSuccess } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1>Your Saved Comments</h1>
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
