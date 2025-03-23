import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
// import About from './component/About';
import ContactMe from './component/ContactMe';
import Footer from "./Footer.js"
import MainPage from './ProjectPage/MainPage.js';
import "./App.css";
import MainHome from './Homepage/MainHome.js';
import MainAbout from './About/MainAbout.js';

function App() {
  return (
    <div className='setbackground'>
      <div style={{ overflowY: "auto", height: "100vh" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="about" element={<MainAbout />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="projects" element={<MainPage/>} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
