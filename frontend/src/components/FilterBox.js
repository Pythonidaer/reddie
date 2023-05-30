import React, { useState } from 'react'
import { Container, Form, ListGroup } from 'react-bootstrap'
import { DebounceInput } from 'react-debounce-input'

const FilterBox = ({ comments, setFilteredComments }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    console.log(searchTerm)
    setSearchTerm(searchTerm)
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
