import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
// import NewCommentScreen from './screens/NewCommentScreen'
import SavedCommentsScreen from './screens/SavedCommentsScreen'
import SavedCommentScreen from './screens/SavedCommentScreen'

const App = () => {
  const [data, setData] = useState('initial data')

  function handleChangeData(newData) {
    setData(newData)
  }

  return (
    <DataContext.Provider value={{ data, handleChangeData }}>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/dynamicPost/:id' element={<DynamicPostScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              {/* <Route
                path='/new-comment'
                element={
                  <PrivateRoute>
                    <NewCommentScreen />
                  </PrivateRoute>
                }
              /> */}
              <Route
                path='/comments'
                element={
                  <PrivateRoute>
                    <SavedCommentsScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path='/comment/:commentId'
                element={
                  <PrivateRoute>
                    <SavedCommentScreen />
                  </PrivateRoute>
                }
              />
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
