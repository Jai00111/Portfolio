import React from "react";
import Home from "../Home.svg"
import About from "../About.svg"
import Project from "../Project.svg"
import contact from "../contact.svg"
import { Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <nav  className="navbar navbar-expand-lg text-white bg-transparent" style={{position:"fixed" , width:"100%", backdropFilter: "blur(10px) ", zIndex:"1"}}>
            <div className="container-fluid text-white" style={{color:"white"}}>
                <Link className="navbar-brand" to="/" style={{color:"white"}} aria-disabled>PORTFOLIO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{color: "white"}}>
                    <span className="navbar-toggler-icon" style={{filter: "invert(100%) brightness(1000%)", WebkitFilter: "invert(100%)brightness(1000%)",color:"white"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/" style={{color:"white", marginLeft:"250px", display:"flex"}}><img src={Home} alt=""></img>Home</Link>
                        <Link className="nav-link" to="/About"style={{color:"white", marginLeft:"250px" ,display:"flex"}}> <img src={About} alt=""></img>About</Link>
                        <Link className="nav-link" to="/Projects" style={{color:"white", marginLeft:"250px", display:"flex"}}> <img src={Project} alt=""></img>Projects</Link>
                        <Link className="nav-link "  to="/Contact" style={{color:"white", marginLeft:"250px", display:"flex"}}> <img src={contact} alt="" style={{height:"1.3rem",width:"1.3rem", display:"flex"}}></img>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}