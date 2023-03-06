import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import Post from '../components/Post'
import axios from 'axios'

const PostScreen = () => {
  const [post, setPost] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/posts/${params.id}`)

      setPost(data)
    }

    fetchPost()
  }, [params.id])

  //   Section 2.10 I deviated to just re-use Post component
  // Issue includes the "See Post" being redundant
  // Also will have to add a new column to the side
  //   Or at least make a separate component or buttons for editing, deleting, and adding/saving
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Post post={post} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PostScreen
