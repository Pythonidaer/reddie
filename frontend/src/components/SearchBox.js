import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'

import { Row, Col } from 'react-bootstrap'
import Post from '../components/Post'
import axios from 'axios'

const SearchBox = () => {
  /*This code defines a React functional component named SearchBox that displays a search form for a Reddit subreddit. The form includes a text input field for the search term and a button to submit the form.
      
      When the user submits the form, the handleSearch function is called, which makes an Axios GET request to the Reddit API using the search term entered by the user. The response from the API is then parsed using the dataParser function, which extracts the relevant data from the API response and returns it as an array of objects. This array is then set as the state of the searchResults variable.
      
      The searchResults state variable is then used to render a list of posts returned by the API. Each post is displayed as a Post component, which receives the post data as a prop.
      
      Overall, this code provides a simple search feature for a Reddit subreddit, allowing users to search for posts by keyword and display the results in a user-friendly way.*/

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const dataParser = (arr) => {
    const allPosts = []
    arr.forEach((el) => {
      allPosts.push(el.data)
    })
    return allPosts
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${searchTerm}.json?limit=4`
      )
      const { children } = response.data.data
      setSearchResults(dataParser(children))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Test</h1>
      <Form onSubmit={handleSearch} className='d-flex'>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
          value={searchTerm}
        ></Form.Control>
        <Button
          type='submit'
          variant='outline-success'
          className='p-2'
          onClick={handleSearch}
        >
          Search
        </Button>
      </Form>
      <Row>
        {searchResults.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </>
  )
}
export default SearchBox
