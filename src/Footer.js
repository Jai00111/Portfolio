import React from 'react'

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function footer() {
  return (
    <div>
      <footer style={{
                      backgroundColor: "#140e0e",
                      padding: "20px",
                      textAlign: "center",
                      bottom: "0",
                      width: "100%",
                      color:"white"
                  }}>
                      <p>Designed and Developed by Jai Singh.</p>
                      <p>&copy; 2025 Jai Singh. All rights reserved.</p>
                      <div style={{
                          display: "flex",
                          justifyContent: "space-around",
                          gap: "20px"
                      }}>
                          <a href="https://github.com/Jai00111" target="_blank" rel="noreferrer">
                              <AiFillGithub style={{ fontSize: "24px" }} />
                          </a>
                          <a href="https://www.linkedin.com/in/jai-singh-4b2063302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                              <FaLinkedinIn style={{ fontSize: "24px" }} />
                          </a>
                      </div>
                  </footer>
    </div>
  )
}
