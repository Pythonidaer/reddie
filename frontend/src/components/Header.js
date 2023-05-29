import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

// Header component
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    // Dispatch the logout and reset actions
    dispatch(logout())
    dispatch(reset())
    // Navigate to the home page
    navigate('/')
  }

  return (
    <header>
      {/* Navbar component */}
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* Brand link */}
          <LinkContainer to='/'>
            <Navbar.Brand>Reddie</Navbar.Brand>
          </LinkContainer>
          {/* Navbar toggle button */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {/* Navbar collapse section */}
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* Navigation links */}
            <Nav>
              {user ? (
                // If user is logged in
                <>
                  {/* Comment link */}
                  <LinkContainer to='/comments'>
                    <Nav.Link>
                      <i className='fa-solid fa-heart-circle-check'></i> Content
                    </Nav.Link>
                  </LinkContainer>
                  {/* Logout button */}
                  <LinkContainer to='/'>
                    <Nav.Link>
                      {/* Use Button component to align the icon properly */}
                      <Button onClick={onLogout} className='logout'>
                        <i className='fa-solid fa-circle-xmark'></i> Logout
                      </Button>
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                // If user is not logged in
                <>
                  {/* Login link */}
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      {/* Use fa-solid icon for consistency */}
                      <i className='fa-regular fa-user'></i> Login
                    </Nav.Link>
                  </LinkContainer>
                  {/* Register link */}
                  <LinkContainer to='/register'>
                    <Nav.Link>
                      <i className='fa-solid fa-user-plus'></i> Register
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
/*
The component returns JSX markup that represents a responsive navigation bar (Navbar) at the top of the page.
The Navbar component and other related components are imported from the react-bootstrap library. They provide pre-styled components for building responsive navigation bars.
The LinkContainer component is imported from react-router-bootstrap and is used to wrap the navigation links to enable routing within a React application.
The useNavigate hook is used from the react-router-dom library to programmatically navigate between pages.
The useSelector hook is used to access the user state from the Redux store. It retrieves the authenticated user information.
The useDispatch hook is used to get the dispatch function from the Redux store. It allows dispatching actions.
The onLogout function is invoked when the logout button is clicked. It dispatches the logout and reset actions, clears the user data, and navigates to the home page.
The navigation links (Nav.Link) are conditionally rendered based on whether the user is logged in or not.
If the user is logged in, the comment link and logout button are displayed.
If the user is not logged in, the login link and register link are displayed.
Each link is wrapped in a LinkContainer component to provide routing functionality.
Icons from the Font Awesome icon library are used to represent the different links and buttons.
The Button component is used to wrap the logout button and align the icon properly within the navigation bar.
The Navbar component is configured with a dark background (bg='dark'), a dark variant (variant='dark'), and expands on large screens while collapsing on smaller screens (expand='lg' collapseOnSelect).
The header section is wrapped in a header element.

Overall, this Header component provides a responsive navigation bar with different links based on the user's authentication status. It can be used in a React application to maintain consistent header styling and navigation across multiple pages.
*/
