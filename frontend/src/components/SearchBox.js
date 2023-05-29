import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useTypewriter } from 'react-simple-typewriter'
import typewriterSubreddits from '../features/data/typewriterSubreddits.js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

const SearchBox = ({ onResponse }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [randomizedArray, setRandomizedArray] = useState(typewriterSubreddits)
  const [text] = useTypewriter({
    words: randomizedArray,
    loop: true,
    delay: 100,
  })

  // Prepare subreddit options for Typeahead
  const updatedSubreddits = typewriterSubreddits.map((subreddit) => ({
    name: subreddit,
  }))
  const sortedSubreddits = [...updatedSubreddits].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  // Handle selection in Typeahead
  const handleSingleSelections = (selected) => {
    setSearchTerm(selected?.[0]?.name || '')
  }

  // Shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const randomizedSubreddits = [...array]
    randomizedSubreddits.forEach((_, i, arr) => {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    })
    return randomizedSubreddits
  }

  // Initialize the randomizedArray state with shuffled subreddits
  useEffect(() => {
    setRandomizedArray(shuffleArray(typewriterSubreddits))
  }, [])

  // Handle subreddit search
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
            'Subreddits can only contain letters, numbers, and underscores.'
          break
        case error.message === 'Network Error':
          message = 'Subreddit not found. Please try a different subreddit.'
          break
        case searchTerm.startsWith('_'):
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

  return (
    <>
      <h1>Search a Subreddit</h1>
      <Form onSubmit={handleSearch} className='d-flex'>
        <Typeahead
          id='basic-typeahead-single'
          type='text'
          name='q'
          labelKey='name'
          onChange={handleSingleSelections}
          options={sortedSubreddits}
          placeholder={`Try typing in: ${text}`}
          inputValue={searchTerm}
          onInputChange={setSearchTerm}
          className='w-100'
        />
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
/*
The code imports necessary dependencies such as React, useState, useEffect, and various components from react-bootstrap and other libraries.

The SearchBox component is defined as a functional component that takes a prop called onResponse.

Inside the component, there are several state variables defined using the useState hook. These include searchTerm for storing the user's search input, randomizedArray for storing a shuffled array of subreddits, and text for managing the typewriter effect.

The typewriterSubreddits array is prepared as an array of objects with the subreddit names.

The handleSingleSelections function is defined to handle the selection of a subreddit from the dropdown menu of the Typeahead component. It updates the searchTerm state accordingly.

The shuffleArray function is defined to shuffle an array using the Fisher-Yates algorithm. It is used to create a randomized array of subreddits.

The useEffect hook is used to initialize the randomizedArray state with a shuffled array of subreddits when the component mounts. It runs only once thanks to the empty dependency array [].

The handleSearch function is defined to handle the submission of the search form. It sends a GET request to the Reddit API to fetch posts from the selected subreddit. It also handles various error scenarios and displays appropriate error messages using the toast component from react-toastify.

The JSX code renders the search form and components. It includes a heading, a form with the Typeahead component for subreddit selection, and a submit button.

The Typeahead component allows users to select a subreddit from a dropdown menu. It displays suggestions based on the sortedSubreddits array and updates the searchTerm state accordingly.

The submit button triggers the handleSearch function when clicked.

Overall, the SearchBox component provides a search interface for users to enter a subreddit, fetches posts from that subreddit using the Reddit API, and displays error messages if necessary. The typewriter effect adds a dynamic element to the component by displaying randomized subreddit names as a typing animation.
*/
