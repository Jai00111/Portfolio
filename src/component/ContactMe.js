import React from "react";
import Contact from "./contactimg.svg"
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import backhand from "./backhandPointer.svg";
import "./style.css"
export default function ContactMe() {
    return (
        <div className="maindiv" >
            <img src={Contact} alt=""></img>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", color: "white",
                fontSize:"1rem"
            }}>
                <div className="Contact">
                    <div className="contactDetail">
                        <h1 style={{ boxShadow: "none", pointerEvents: "none", color: "#5DB9EE" }}><strong >Jai Singh</strong></h1>
                        <strong>Email.id--</strong><div style={{display:"flex", flexDirection:"row"}}><img src={backhand} alt="" style={{ height: "30px", width: "40px", boxShadow: "none", pointerEvents: "none" }}></img><strong style={{ boxShadow: "none", pointerEvents: "none", color: "#5DB9EE" }}>jaibisht234@gmail.com</strong></div>
                        <strong>Mob.No--</strong><div style={{display:"flex", flexDirection:"row"}}><img src={backhand} alt="" style={{ height: "30px", width: "40px", boxShadow: "none", pointerEvents: "none" }}></img><strong style={{ boxShadow: "none", pointerEvents: "none", color: "#5DB9EE" }}>7251916265</strong></div>
                    </div>
                    </div>
                    <div className="Links">
                        <a className="Contact" href="https://github.com/Jai00111" target="_blank" rel="noreferrer">
                            <AiFillGithub style={{fontSize:"50px"}}/>
                        </a>
                        <a className="Contact" href="https://www.linkedin.com/in/jai-singh-4b2063302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                            <FaLinkedinIn style={{fontSize:"50px"}}/>
                        </a>
                    </div>
            </div>
        </div>
    )
}