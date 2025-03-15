import React from "react";
import Contact from "../contactimg.svg"
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import backhand from "../backhandPointer.svg";
export default function ContactMe() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px"
        }}
        >
            <img src={Contact} alt=""></img>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", color: "white",
                fontSize:"1rem"
            }}>
                <div style={{ marginTop:"40px" ,padding:"40px",
                    transition: "box-shadow 0.3s ease-in",
                    boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                }}
                    onMouseOver={(e) => {
                        e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                    }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "none", pointerEvents: "none" 

                    }}>
                        <h1 style={{ boxShadow: "none", pointerEvents: "none", color: "#5DB9EE" }}><strong >Jai Singh</strong></h1>
                        <img src={backhand} alt="" style={{ height: "30px", width: "40px", boxShadow: "none", pointerEvents: "none" }}></img><strong style={{ boxShadow: "none", pointerEvents: "none" }}>Email.id--</strong><strong style={{ boxShadow: "none", pointerEvents: "none", color: "#5DB9EE" }}>jaibisht234@gmail.com</strong>
                        <img src={backhand} alt="" style={{ height: "30px", width: "40px", boxShadow: "none", pointerEvents: "none" }}></img><strong style={{ boxShadow: "none", pointerEvents: "none" }}>Mob.No--</strong><strong style={{ boxShadow: "none", pointerEvents: "none", color: "#5DB9EE" }}>7251916265</strong>
                    </div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "20px",
                        marginTop:"40px"

                    }}>
                        <a href="https://github.com/Jai00111" target="_blank" rel="noreferrer">
                            <AiFillGithub style={{ fontSize: "50px",transition: "box-shadow 0.3s ease-in",
                    boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                }}
                    onMouseOver={(e) => {
                        e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"; }} />
                        </a>
                        <a href="https://www.linkedin.com/in/jai-singh-4b2063302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                            <FaLinkedinIn style={{ fontSize: "50px",transition: "box-shadow 0.3s ease-in",
                    boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                }}
                    onMouseOver={(e) => {
                        e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"; }} />
                        </a>
                    </div>
            </div>
        </div>
    )
}