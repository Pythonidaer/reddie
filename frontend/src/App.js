import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import DataContext from './components/DataContext'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import DynamicPostScreen from './screens/DynamicPostScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

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
              <Route path='/post/:id' element={<PostScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
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
