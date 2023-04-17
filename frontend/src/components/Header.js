import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
// import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

// const Header = ({ isLoggedIn }) => {
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Reddie</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              {user ? (
                <>
                  <LinkContainer to='/content'>
                    <Nav.Link>
                      <i className='fa-solid fa-heart-circle-check'></i> Content
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/'>
                    <Nav.Link>
                      <i className='fa-solid fa-circle-xmark'></i>
                      <Button onClick={onLogout}>Logout</Button>
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      {/* Might prefer fa-solid here */}
                      <i className='fa-regular fa-user'></i> Login
                    </Nav.Link>
                  </LinkContainer>
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
{user ? (
  <li>
     <button onclick={onLogouit}>Logout</button>
    </li>
) : (<li>
  <Link to='/login'>
     <FaSignInAlt /> Login
  </Link>
</li>
<li>
  <Link to='/register'>
    <FaUser /> Register
  </Link>
</li>
  )}
*/
