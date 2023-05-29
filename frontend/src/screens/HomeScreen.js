import React, { useState, useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import DynamicPost from '../components/DynamicPost'
import DataContext from '../components/DataContext'

const HomeScreen = () => {
  // State variables to store all posts and search results
  const [allPosts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  // Access the data and handleChangeData function from the DataContext using useContext
  const { data, handleChangeData } = useContext(DataContext)

  // Function to parse the response data and extract the posts
  const dataParser = (arr) => {
    const allPosts = []
    arr.forEach((el) => {
      allPosts.push(el.data)
    })
    return allPosts
  }

  // Function to handle the Axios response
  const handleAxiosResponse = (response) => {
    // Parse the response data and update the data in the DataContext
    handleChangeData(dataParser(response))

    // Update the search results with the parsed data
    setSearchResults(dataParser(response))
  }

  return (
    <>
      {/* Render the SearchBox component and pass the handleAxiosResponse function as a prop */}
      <SearchBox onResponse={handleAxiosResponse} />

      {/* Check if searchResults is not empty */}
      {searchResults && (
        <Row>
          {/* Render DynamicPost component for each post in searchResults */}
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
/*
The HomeScreen component represents the home screen of the application and renders a search box and a list of dynamic posts.

State variables allPosts and searchResults are used to store the posts and the search results, respectively.

The useContext hook is used to access the data and handleChangeData function from the DataContext.

The dataParser function takes an array of data and extracts the posts from each element.

The handleAxiosResponse function is responsible for handling the response from an Axios request. It calls dataParser to extract the posts from the response data, updates the data in the DataContext using handleChangeData, and sets the search results with the parsed data.

The component returns JSX elements, including the SearchBox component rendered with the handleAxiosResponse function passed as a prop. The search results are then mapped to DynamicPost components and rendered within Row and Col components to create a grid layout. The key prop is set to i to ensure proper component re-rendering.
*/
