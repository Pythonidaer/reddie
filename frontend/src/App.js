import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/post/:id' element={<PostScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
          {/* 
          <h1>Welcome to Reddie</h1>
        <HomeScreen />
        */}
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
