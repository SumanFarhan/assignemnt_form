import React from 'react'
import Login from './Login'
import 'antd/dist/reset.css';
import "./App.css"
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App