import React, { useState, useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import DynamicPost from '../components/DynamicPost'
import DataContext from '../components/DataContext'

const HomeScreen = () => {
  const [allPosts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
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

  return (
    <>
      <SearchBox onResponse={handleAxiosResponse} />
      {searchResults && (
        <Row>
          {searchResults.map((post, i) => (
            <Col key={i} sm={12} md={6} lg={4} xl={3}>
              <DynamicPost post={post} url={''} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
