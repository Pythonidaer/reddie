import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)

  // If user is authenticated, render the children components
  if (user) return children

  // If user is not authenticated, navigate to the login page
  return <Navigate to='/login' />
}

export default PrivateRoute
/*
The component takes a children prop, which represents the components to be rendered when the user is authenticated.
The useSelector hook is used to access the user state from the Redux store. It retrieves the authenticated user information.
If the user exists (i.e., the user is authenticated), the component renders the children components.
If the user does not exist (i.e., the user is not authenticated), the component uses the Navigate component from react-router-dom to navigate the user to the login page (<Navigate to='/login' />).
This component can be used in a React application to protect certain routes and only allow access to authenticated users. If a user is not authenticated, they will be redirected to the login page.
*/
