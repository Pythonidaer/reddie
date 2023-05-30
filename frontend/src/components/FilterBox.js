import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { DebounceInput } from 'react-debounce-input'

const FilterBox = ({ comments, setFilteredComments, onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    setSearchTerm(searchTerm)
    onSearchTermChange(searchTerm) // Call the callback function in the parent component

    filterComments(searchTerm)
  }

  const filterComments = (searchTerm) => {
    const filteredComments = comments.filter(
      (comment) =>
        comment.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.subreddit.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredComments(filteredComments)
  }

  //   Pass a child prop - e.target.value - up to the SavedCommentsScreen
  return (
    <Container>
      <Form>
        <Form.Group controlId='filterBox'>
          <DebounceInput
            id='filterBox'
            type='text'
            placeholder='Filter by subreddit or body text'
            onChange={handleSearch}
            value={searchTerm}
            className='form-control'
            debounceTimeout={500} // 500 milliseconds debounce delay
          />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default FilterBox
