import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}
