import React, { useState, useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DynamicPost from '../components/DynamicPost'
import axios from 'axios'
import { useTypewriter } from 'react-simple-typewriter'
import typewriterSubreddits from '../features/data/typewriterSubreddits.js'

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
      console.error(error)
    }
  }

  /*
Animation libraries to look into for dynamic placeholder text change:
- React Spring, Framer Motion, React Transition Group,
- React Animations, Anime.js
- PURPOSE: maybe to give the user a list of subreddits to consider
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
