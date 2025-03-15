import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Homepage from './component/Homepage';
import ContactMe from './component/ContactMe';
import Footer from "./Footer.js"
import MainPage from './ProjectPage/MainPage.js';

function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${require("./backgroundtheme.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
      <div style={{ overflowY: "auto", height: "100vh" }}>
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
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
