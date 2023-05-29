import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const RegisterScreen = () => {
  // State variable to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  // Retrieve the dispatch function and navigate hook
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Retrieve user, isLoading, isError, isSuccess, and message from the auth slice in the Redux store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    // Display error toast if isError is true
    if (isError) {
      toast.error(message)
    }

    // Redirect to home page if registration is successful or user is already logged in
    if (isSuccess || user) {
      navigate('/')
    }

    // Reset the auth slice state
    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  // Function to update the form data on input change
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault()

    // Check if the passwords match
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      // Create user data object from form data
      const userData = {
        username,
        email,
        password,
      }

      // Dispatch the register action
      dispatch(register(userData))
    }
  }

  // Destructure username, email, password, and password2 from formData
  const { username, email, password, password2 } = formData

  // Render a spinner if the isLoading state is true
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {/* Heading section */}
      <section className='heading'>
        <h1>
          <i className='fa-solid fa-user'></i> Register
        </h1>
        <p>Please create an account</p>
      </section>

      {/* Form section */}
      <section className='form'>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={username}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </section>
    </>
  )
}

export default RegisterScreen
/*
This code represents a registration screen in a React application. It uses Redux for state management and react-bootstrap for styling. The component handles form submission, dispatches the register action, and displays error messages using react-toastify. The component also redirects to the home page if the registration is successful or if the user is already logged in.
*/
