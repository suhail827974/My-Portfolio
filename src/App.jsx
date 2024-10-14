import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/projects" element={ <Projects/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/contact" element={ <Contact/>}/>
    </Routes>
      
    </>
  )
}

export default App
