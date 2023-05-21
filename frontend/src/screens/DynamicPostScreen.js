import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
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
  const { id } = useParams()
  const navigate = useNavigate()

  const checkURL = (url) => {
    if (data === 'initial data') {
      // Post data is not available yet, redirect to Home page
      navigate('/')
      return null
    }
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
      <DynamicPost key={post.id} post={post} url={url} />
    </>
  )
}

export default DynamicPostScreen
/*
<Container fluid>
<Row>
  <Col className='d-flex justify-content-center'>
    <DynamicPost key={post.id} post={post} url={url} />
  </Col>
</Row>
</Container>
*/
