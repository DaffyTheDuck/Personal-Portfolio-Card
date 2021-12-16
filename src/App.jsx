import React from 'react';
import './App.scss';
import Home from './components/Home';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}
