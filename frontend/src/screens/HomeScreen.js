import React, { useState, useEffect } from 'react'
// import { Link, useParams } from 'react-router-dom'

import { Row, Col } from 'react-bootstrap'
import Post from '../components/Post'
import axios from 'axios'
import SearchBox from '../components/SearchBox'
// import posts from '../posts'

const HomeScreen = () => {
  // const params = useParams()
  // const keyword = params.keyword
  const [allPosts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/posts')

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <SearchBox />

      <h1>Latest Posts</h1>
      <Row>
        {allPosts.map((post) => (
          <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
