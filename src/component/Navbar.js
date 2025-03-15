import React from "react";
import Home from "../Home.svg"
import About from "../About.svg"
import Project from "../Project.svg"
import contact from "../contact.svg"
export default function Navbar() {
    return (
        <nav  className="navbar navbar-expand-lg text-white bg-transparent" style={{position:"fixed" , width:"100%", backdropFilter: "blur(10px)"}}>
            <div className="container-fluid text-white" style={{color:"white"}}>
                <a className="navbar-brand" href="/" style={{color:"white"}} aria-disabled>PORTFOLIO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/" style={{color:"white", marginLeft:"250px", display:"flex"}}><img src={Home} alt=""></img>Home</a>
                        <a className="nav-link" href="/About"style={{color:"white", marginLeft:"250px" ,display:"flex"}}> <img src={About} alt=""></img>About</a>
                        <a className="nav-link" href="/Projects" style={{color:"white", marginLeft:"250px", display:"flex"}}> <img src={Project} alt=""></img>Projects</a>
                        <a className="nav-link "  href="/Contact" style={{color:"white", marginLeft:"250px", display:"flex"}}> <img src={contact} alt="" style={{height:"1.3rem",width:"1.3rem", display:"flex"}}></img>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}