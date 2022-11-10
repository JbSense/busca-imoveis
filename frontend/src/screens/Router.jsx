import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuNav from '../components/Layout/MenuNav'
import Nav from '../components/Layout/Nav'
import Home from './Home'

function Router () {
  return (
    <BrowserRouter>
      <MenuNav />
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
