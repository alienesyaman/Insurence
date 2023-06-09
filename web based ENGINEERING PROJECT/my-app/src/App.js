import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Footer from './screens/Footer';
import Space from './screens/Space';
import Price from './pages/Price';

import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Pay from './pages/Pay';
import Chatbot from './pages/Chatbot';
import Ternary from './pages/Ternary';



export default class App extends Component {
  
  render() {
    return (
        
      <div className='main-container' >     
        
<BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/Price" element={<Price />} />
            <Route path="/Pay" element={<Pay />} />
            <Route path="/Chatbot" element={<Chatbot />} />
          

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>




<Ternary></Ternary>
<Space></Space>
<Footer></Footer>





      </div>
    )
  }
}
