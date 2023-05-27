import React from 'react'
import SearchBox from './SearchBox'

describe('<SearchBox />', () => {
  it('performs concurrent stress testing by making multiple API requests', () => {
    // Define the number of concurrent requests
    const numberOfRequests = 1000

    // Mount the SearchBox component
    cy.mount(<SearchBox />)

    const requests = Array.from({ length: numberOfRequests }).map(() => {
      // Type text into the input field
      cy.get('input[type="text"]').type('test')

      // Click the search button
      cy.get('button[type="submit"]').click({ force: true })

      // Chain the clearing of text using .then()
      cy.get('input[type="text"]').clear()
    })

    // Execute the requests concurrently without a callback
    cy.spread(requests)
  })
})
