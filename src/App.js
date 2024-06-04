import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import Home from './pages/Home'
import Melon from './pages/Melon'
import Bugs from './pages/Bugs'
import Apple from './pages/Apple'
import Ginie from './pages/Ginie'
import Bill from './pages/Bill'
import Recent from './pages/Recent'
import Favorites from './pages/Favorites'
import Mymusic from './pages/Mymusic'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/melon' element={<Melon/>}/>
          <Route path='/bugs' element={<Bugs/>}/>
          <Route path='/apple' element={<Apple/>}/>
          <Route path='/ginie' element={<Ginie/>}/>
          <Route path='/bill' element={<Bill/>}/>
          <Route path='/recent' element={<Recent/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/mymusic' element={<Mymusic/>}/>
        </Routes>
      </Main>
      <Aside/>
    </BrowserRouter>
  )
}

export default App