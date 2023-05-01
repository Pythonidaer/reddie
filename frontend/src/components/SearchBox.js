import React, { useState, useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DynamicPost from '../components/DynamicPost'
import axios from 'axios'
import { useTypewriter } from 'react-simple-typewriter'
import typewriterSubreddits from '../features/data/typewriterSubreddits.js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SearchBox = ({ onResponse }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const [text] = useTypewriter({
    // words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    words: typewriterSubreddits,
    loop: 0,
  })

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${searchTerm}.json?limit=12`
      )
      const { children } = response.data.data
      onResponse(children)
    } catch (error) {
      let message = ''
      switch (true) {
        case searchTerm.length < 3 || searchTerm.length > 21:
          message = 'Subreddits must be between 3 and 21 characters.'
          break
        case !/^[a-zA-Z0-9_]*$/g.test(searchTerm):
          message =
            'Subreddits can only contain letters, numbers and/or underscores.'
          break
        case error.message === 'Network Error':
          message = 'Subreddit not found. Please try a different subreddit.'
          break
        case searchTerm[0].includes('_'):
          message = 'Subreddits cannot start with underscores.'
          break
        default:
          message =
            'There was an error processing your request. Please try again later.'
          break
      }
      toast.error(
        <div>
          <h3>Error!</h3>
          <p>{message}</p>
        </div>
      )
    }
  }

  /*
Now that animation library has been added:
- Need to randomize it so the same ones don't always appear
- Need to find a way for searchbar to autofill with available subreddts
     - For example, "m" maybe autopopulates magictcg
*/
  return (
    <>
      <h1>Search a Subreddit</h1>
      <Form onSubmit={handleSearch} className='d-flex'>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={'Try searching for: ' + text}
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
    </>
  )
}
export default SearchBox
