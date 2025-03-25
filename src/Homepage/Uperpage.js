import React from "react";
import "./Uperpage.css"
import Type from "../Type.js";
import porfolioImage from "./porfolioImage.png"
export default function Uperpage(){
    return(
        <div className="content" style={{ paddingTop: '90px' }}>
            <h1 className="intro" style={{ fontSize: "4rem", color: "#fff", marginLeft: "40px" }}>
                Hii There<span className="wave" role="img" aria-labelledby="wave" style={{fontSize:"4rem"}}>👋🏻</span><br/><span style={{fontSize: "4rem" }}> I'm <strong style={{ color: "#5DB9EE", fontSize: "4rem" }}>Jai Singh</strong></span>
            </h1>
            <div style={{ color: "#5DB9EE", margin: "40px" ,fontSize:"2rem" }}>
                <Type />
            </div>

            <div className="Enthusiastic">
            <p className="detail">
                Enthusiastic and dedicated <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>B.Sc. Computer Science</i> graduate with a solid foundation in <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>web-development.</i> Eager to apply technical skills and problem-solving abilities in a dynamic environment. Seeking an entry-level position in  <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>frontend web development</i> or related field to contribute to innovative projects and gain practical experience.
            </p>
            <img src={porfolioImage} alt="" className="img-fluid" style={{maxHeight: "450px"}}></img>
            </div>

            </div>
    )
}