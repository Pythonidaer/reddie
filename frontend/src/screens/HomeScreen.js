import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Post from '../components/Post'
import posts from '../posts'

const HomeScreen = () => {
  const allPosts = []
  posts.forEach((post) => {
    {
      /* console.log(post.data) */
    }
    allPosts.push(post.data)
  })
  return (
    <>
      <h1>Latest Posts</h1>
      <Row>
        {allPosts.map((post) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
        {/*allPosts.map((post) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{post.title}</h3>
            <h5>{post.author}</h5>
            <h5>{post.num_comments}</h5>
            <h6>{post.subreddit}</h6>

            <br />
          </Col>
        )) */}
      </Row>
    </>
  )
}

export default HomeScreen
