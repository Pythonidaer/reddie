import React, { useState, useEffect, useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import Post from '../components/Post'
import axios from 'axios'
import SearchBox from '../components/SearchBox'
import DynamicPost from '../components/DynamicPost'
import DataContext from '../components/DataContext'

const HomeScreen = () => {
  const [allPosts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  // const data = useContext(DataContext)
  const { data, handleChangeData } = useContext(DataContext)

  const dataParser = (arr) => {
    const allPosts = []
    arr.forEach((el) => {
      allPosts.push(el.data)
    })
    return allPosts
  }

  const handleAxiosResponse = (response) => {
    handleChangeData(dataParser(response))
    setSearchResults(dataParser(response))
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/posts')

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <SearchBox onResponse={handleAxiosResponse} />
      {searchResults && (
        <Row>
          {searchResults.map((post) => (
            <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
              <DynamicPost post={post} url={''} />
            </Col>
          ))}
        </Row>
      )}
      <h1>Latest Posts</h1>

      <Row>
        {allPosts.map((post) => (
          <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
      {/*  */}
    </>
  )
}

export default HomeScreen
