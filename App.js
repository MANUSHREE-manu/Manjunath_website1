
import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Main from './main';
import Header from './nav';
import Signup from './login';
import About from './aboutus';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/main" element={<Main/>} />
        <Route exact path="/nav" element={<Header/>} />
        <Route exact path="/login" element={<Signup/>} />
        <Route exact path="/aboutus" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Footer" element={<footer/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
