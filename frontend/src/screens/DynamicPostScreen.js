import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import DynamicPost from '../components/DynamicPost'
import DataContext from '../components/DataContext'

// import axios from 'axios'

const DynamicPostScreen = () => {
  // const { data, handleChangeData } = useContext(DataContext)
  const { data } = useContext(DataContext)
  const [lastPath, setLastPath] = useState('')
  const [post, setPost] = useState({})
  const url = window.location.href

  const checkURL = (url) => {
    const parts = url.split('/')
    const dynamicPostScreen = parts.find((element) => element === 'dynamicPost')
    const lastPart = parts.pop()
    const myObject = data.find((obj) => obj.id === lastPart)
    setLastPath(lastPart)
    setPost(myObject)
  }

  useEffect(() => {
    checkURL(url)
  }, [])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center'>
            <DynamicPost post={post} url={url} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DynamicPostScreen
/*
  // console.log(data)
  // const { id } = useParams()

  // Maybe use this if there is no prop past to this
  // if (!feedback || feedback.length === 0) {
  //   return <p>No Feedback Yet</p>
  // }
  // const post = searchResults.find((post) => post.id === id)

  // const params = useParams()
  // console.log(params.id)

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     // const { data } = await axios.get(
  //     //   params.id ? `/api/posts/${params.id}` : `/api/posts/${post.id}`
  //     // )
  //     // setPost(post)
  //     // DynamicPost post={post} />
  //   }

  //   fetchPost()
  // }, [])
  */
