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
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

const SearchBox = ({ onResponse }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [singleSelections, setSingleSelections] = useState([])

  const updatedSubreddits = typewriterSubreddits.map((subreddit, i) => {
    return { name: subreddit }
  })
  const sortedSubreddits = updatedSubreddits.sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const handleSingleSelections = (selected) => {
    if (selected && selected.length) {
      setSearchTerm(selected[0].name)
    } else {
      setSearchTerm('')
    }
  }

  // test
  // const handleSingleSelections = (selected) => {
  //   if (selected && selected.length > 0) {
  //     setSearchTerm(selected[0].name)
  //   } else {
  //     setSearchTerm(inputRef.current.state.text)
  //   }
  // }

  // test end

  /*
This function takes an array as input and returns a new shuffled array using the Fisher-Yates shuffle algorithm. The algorithm works by iterating over each item in the array, selecting a random item from the array, and swapping it with the current item. This is repeated for each item in the array, resulting in a randomized order.
*/
  const shuffleArray = (array) => {
    // create a copy of the input array
    const randomizedSubreddits = [...array]
    // shuffle the array using the Fisher-Yates shuffle algorithm
    randomizedSubreddits.forEach((_, i, arr) => {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    })
    // return the shuffled array
    return randomizedSubreddits
  }

  /*
  This line declares a state variable randomizedArray and sets its initial value to the typewriterSubreddits array. This array is used as the input to the useTypewriter hook.
*/
  const [randomizedArray, setRandomizedArray] = useState(typewriterSubreddits)
  /*
This line initializes the text state variable and the setText function using the useTypewriter hook. The words property of the object passed to the hook is set to randomizedArray, so the typewriter will go through the randomized array each time it loops.
*/
  // do I need setText here?
  const [text, setText] = useTypewriter({
    words: randomizedArray,
    loop: true,
    delay: 100,
  })

  /*
  This useEffect hook is called once when the component mounts and uses the shuffleArray function to create a new randomized array. The randomizedArray state variable is then updated with this new array, causing the component to re-render and the typewriter to start looping through the new randomized array. The empty dependency array [] ensures that this effect runs only once, when the component mounts.
  */
  useEffect(() => {
    setRandomizedArray(shuffleArray(typewriterSubreddits))
  }, [])
  // Needs documentation end

  // This function fetches a subreddit's posts
  // It will notify the user of an error if they provide invalid input
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
  
  const handleSearchBlur = () => {
    // Your search functionality here
    console.log(searchTerm)
  }

  const handleBlur = () => {
    handleSearchBlur()
  }
  
          onBlur={handleBlur}


Removed from Typeahead below placeholder
          selected={searchTerm ? [{ name: searchTerm }] : null}

  */
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
          placeholder={'Try typing in: ' + text}
          inputValue={searchTerm}
          onInputChange={(input) => setSearchTerm(input)}
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
