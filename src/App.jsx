import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Pdf from './components/Pdf';
import Audio from './components/Audio';
import Favorites from './components/Favorites';
import ReadBooks from './components/ReadBooks';
import Stores from './components/Stores';
import { PdfProvider } from './components/PdfContext';
import Footer from './components/Footer';

function App() {
 

  return (
    <Router>
         <PdfProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pdf-books" element={<Pdf/>}></Route>
        <Route path="/audio-books" element={<Audio/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="read" element={<ReadBooks/>}></Route>
        <Route path="stores" element={<Stores/>}></Route>
      </Routes>
      <Footer/>
      </PdfProvider>
    </Router>
  )
}

export default App
