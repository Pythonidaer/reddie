import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DynamicPost from '../components/DynamicPost'
import DataContext from '../components/DataContext'

const DynamicPostScreen = () => {
  const { data } = useContext(DataContext)
  const [lastPath, setLastPath] = useState('')
  const [post, setPost] = useState({})
  const url = window.location.href
  const navigate = useNavigate()

  const checkURL = (url) => {
    if (data === 'initial data') {
      // Post data is not available yet, redirect to Home page
      navigate('/')
      return null
    }
    const parts = url.split('/')
    const dynamicPostScreen = parts.find((element) => element === 'dynamicPost')
    const lastPart = parts.pop()
    const myObject = data.find((obj) => obj.id === lastPart)
    setLastPath(lastPart)
    setPost(myObject)
  }

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
