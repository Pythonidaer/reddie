import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const LoginScreen = () => {
  // State variable to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // Destructure email and password from formData
  const { email, password } = formData

  // Retrieve the dispatch function and navigate hook
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Retrieve isLoading state from the auth slice in the Redux store
  const { isLoading } = useSelector((state) => state.auth)

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

    // Create user data object from form data
    const userData = {
      email,
      password,
    }

    // Dispatch the login action and handle the promise returned by unwrap()
    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        toast.success(`Logged in as ${user.username}`)
        navigate('/comments')
      })
      .catch(toast.error)
  }

  // Render a spinner if the isLoading state is true
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {/* Heading section */}
      <section className='heading'>
        <h1>
          <i className='fa-solid fa-right-to-bracket'></i> Login
        </h1>
        <p>Please log in to save comments</p>
      </section>

      {/* Form section */}
      <section className='form'>
        <Form onSubmit={onSubmit}>
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

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </section>
    </>
  )
}

export default LoginScreen
/*
The LoginScreen component represents the login screen of the application and renders a login form.

The state variable formData is used to store the form data, which includes email and password.

The useDispatch hook is used to retrieve the dispatch function, and the useNavigate hook is used to retrieve the navigate function for navigation.

The useSelector hook is used to retrieve the isLoading state from the auth slice in the Redux store.

The onChange function is responsible for updating the form data (formData) whenever the input values change.

The onSubmit function is called when the form is submitted. It creates a user data object from the form data, dispatches the login action with the user data, and handles the promise returned by unwrap(). If the login is successful, a success toast message is displayed, and the user is navigated to the /comments route. Otherwise, an error toast message is displayed.

If the isLoading state is true, a Spinner component is rendered to indicate loading.

The component returns JSX elements, including the heading section and the login form section. The form is wrapped in a Form component from react-bootstrap, and each input field uses Form.Control to render the input element. The form includes a submit button for form submission.
*/
