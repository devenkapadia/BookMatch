import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Authors from './pages/authors/Authors';
import Recs from './pages/recommendation/Recs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recs />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Router>
  </>
}

export default App
