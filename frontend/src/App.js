import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Footer from './components/Footer'
import DataContext from './components/DataContext'
import HomeScreen from './screens/HomeScreen'
import DynamicPostScreen from './screens/DynamicPostScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import SavedCommentsScreen from './screens/SavedCommentsScreen'
import SavedCommentScreen from './screens/SavedCommentScreen'

const App = () => {
  // State hook to store and update data
  const [data, setData] = useState('initial data')

  // Function to handle data changes
  // Used with DataContext, this will allow us to create
  // a data context that can be accessed
  // by any component within its descendant hierarchy.
  function handleChangeData(newData) {
    setData(newData)
  }

  // This way, any component can access and update
  // the shared data without having to pass it through
  // multiple levels of component hierarchy explicitly.
  return (
    <DataContext.Provider value={{ data, handleChangeData }}>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />

              {/* Route for dynamic posts fetched from a subreddit search */}
              <Route path='/dynamicPost/:id' element={<DynamicPostScreen />} />

              {/* Route for login when user is already created in database */}
              <Route path='/login' element={<LoginScreen />} />

              {/* Route for register screen when user hasn't created an account yet */}
              <Route path='/register' element={<RegisterScreen />} />

              {/* Route for saved comments screen (requires authentication) */}
              <Route
                path='/comments'
                element={
                  <PrivateRoute>
                    <SavedCommentsScreen />
                  </PrivateRoute>
                }
              />

              {/* Route for a specific saved comment screen (requires authentication) */}
              <Route
                path='/comment/:commentId'
                element={
                  <PrivateRoute>
                    <SavedCommentScreen />
                  </PrivateRoute>
                }
              />

              {/* Default route, redirects to the home screen */}
              <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </DataContext.Provider>
  )
}

export default App
