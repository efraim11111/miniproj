import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UserContext from '../context/userContext'

const Home = () => {
  return (
    <>
      <h1 className='md:text-teal-600 sm:text-blue-500 '>home, hello {name}</h1>
    </>
  )
}

export default Home