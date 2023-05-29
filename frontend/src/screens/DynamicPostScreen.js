import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DynamicPost from '../components/DynamicPost'
import DataContext from '../components/DataContext'

const DynamicPostScreen = () => {
  // Access the data from the DataContext using useContext
  const { data } = useContext(DataContext)

  // State variables to store the last visited path and the current post
  const [lastPath, setLastPath] = useState('')
  const [post, setPost] = useState({})

  // Get the current URL and initialize the navigate function
  const url = window.location.href
  const navigate = useNavigate()

  // Function to check the URL and retrieve the corresponding post
  const checkURL = (url) => {
    if (data === 'initial data') {
      // If the post data is not available yet, redirect to the Home page
      navigate('/')
      return null
    }

    // Split the URL into parts and find the 'dynamicPost' section
    const parts = url.split('/')
    const dynamicPostScreen = parts.find((element) => element === 'dynamicPost')

    // Get the last part of the URL which represents the post ID
    const lastPart = parts.pop()

    // Find the corresponding post object using the ID
    const myObject = data.find((obj) => obj.id === lastPart)

    // Set the last visited path and the post object in the state
    setLastPath(lastPart)
    setPost(myObject)
  }

  // Check the URL when the component mounts
  useEffect(() => {
    checkURL(url)
  }, [])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <DynamicPost key={post.id} post={post} url={url} />
    </>
  )
}

export default DynamicPostScreen
/*
The DynamicPostScreen component renders a dynamic post screen and retrieves the necessary data from the DataContext using the useContext hook.

State variables lastPath and post are used to keep track of the last visited path and the current post.

The url variable stores the current URL, and the navigate function from the useNavigate hook is used for navigation.

The checkURL function is responsible for checking the URL and retrieving the corresponding post based on the ID. If the post data is not available yet (indicated by 'initial data'), it redirects to the Home page.

The useEffect hook is used to call the checkURL function when the component mounts.

The component returns the JSX elements, including a link to navigate back to the Home page (<Link>) and the DynamicPost component to render the post based on the retrieved data. The key prop is set to post.id to ensure proper component re-rendering.
*/
