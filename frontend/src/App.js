import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import DataContext from './components/DataContext'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import DynamicPostScreen from './screens/DynamicPostScreen'

const App = () => {
  const [data, setData] = useState('initial data')

  function handleChangeData(newData) {
    setData(newData)
  }

  // const data = {
  //   foo: 'bar',
  //   baz: 42,
  // }
  return (
    <DataContext.Provider value={{ data, handleChangeData }}>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/dynamicPost/:id' element={<DynamicPostScreen />} />
              <Route path='/post/:id' element={<PostScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </DataContext.Provider>
  )
}

export default App
