import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Content from '../components/Layout/Content'
import MenuNav from '../components/Layout/MenuNav'
import Nav from '../components/Layout/Nav'
import Ad from './Ad'
import EditAdmin from './Admin/Account/Edit'
import ShowAdmin from './Admin/Account/Show'
import CreateAccount from './CreateAccount'
import Home from './Home'
import Login from './Login'
import ShowProperties from './Properties/Show'
import EditProperties from './Properties/Edit'
import CreateProperties from './Properties/Create'
import Test from './Test'

function Router () {
  return (
    <BrowserRouter>
      <MenuNav />
      <Nav />
      <Content>
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route exact path='/' element={<Home />} />
          <Route path='ad' element={<Ad />} />
          <Route path='login' element={<Login />} />
          <Route path='create-account' element={<CreateAccount />} />
          <Route path='show-admin-account' element={<ShowAdmin />} />
          <Route path='edit-admin-account' element={<EditAdmin />} />
          <Route path='show-properties' element={<ShowProperties />} />
          <Route path='edit-properties' element={<EditProperties />} />
          <Route path='create-properties' element={<CreateProperties />} />
        </Routes>
      </Content>
    </BrowserRouter>
  )
}

export default Router
