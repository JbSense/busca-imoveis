import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from '../components/Layout/Content'
import Footer from '../components/Layout/Footer'
import MenuNav from '../components/Layout/MenuNav'
import Nav from '../components/Layout/Nav'
import Home from './Home'

function Router () {
  return (
    <BrowserRouter>
      <MenuNav />
      <Nav />
      <Content>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
