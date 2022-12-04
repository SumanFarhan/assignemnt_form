import React from 'react'
import Login from './Login'
import 'antd/dist/reset.css';
import "./App.css"
// import Signup from './Signup';
import ContextComponent from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContextComponent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/welcome' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App