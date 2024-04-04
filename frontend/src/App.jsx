import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App