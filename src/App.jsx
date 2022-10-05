import {BrowserRouter, Routes, Route} from 'react-router-dom'


import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Galler from './pages/gallery/Gallery'
import Services from './pages/services/Services'
import Plans from './pages/plan/Plans'
import Projects from './pages/projects/Projects'
import NotFound from './pages/notFound/NotFound'
import Trainers from './pages/trainers/Trainers'
import Donate from './pages/donates/Donate'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Galler/>
      <Services/>
      <Plans/>
      <Projects/> 
      <NotFound/>
      <Trainers/>
      <Donate/>
      </BrowserRouter>
  )
}

export default App