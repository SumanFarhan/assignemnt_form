import React, { useState, createContext, useContext } from 'react';
import authContext from './Signup'

const Home = () => {
  const { item } = useContext(authContext);
  return (
    <>
    welcome {item}
    </>
  )
}

export default Home