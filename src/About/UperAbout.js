import React, { Component } from "react";
import aboutpage from "./aboutpage.png"
import backhand from "./backhandPointer.svg";
import "./UperAbout.css"

export default class UperAbout extends Component{
    render(){
        return(
            <div style={{ paddingTop: '90px', color: "white", textAlign: "center", fontSize: '1.1rem' }}>
            <h1>Know About Me!</h1>
                <div id="about1" className="d-flex space-around" style={{ marginTop: "8rem" }}>
                    <div>Hii Everyone, I am <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Jai Singh</i> from <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Uttarakhand</i>, India.<br />As a recent <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Computer Science</i> graduate with a strong foundation in <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Maths </i> and <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Statistics,</i><br /> I'm excited to launch my career in the IT sector as a <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Front-end Web Developer.</i>

                        With a passion for crafting intuitive and visually stunning user interfaces, I've honed my skills in<i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}> HTML, CSS, JavaScript, Node.Js, Express.Js, MongoDB, BOOTSTRAP, Material UI ,React.JS.</i><br /><br></br>Apart from coding, some other activites that I love to do!<br></br>
                        <div className="hobbies" style={{ marginTop: "20px"}}>
                            <img src={backhand} alt=""></img> Playing Games.<br />
                            <img src={backhand} alt="" ></img> Travelling.<br />
                            <img src={backhand} alt="" ></img> Drawing.<br />
                            <img src={backhand} alt="" ></img> Watching Movies.<br />
                        </div>
                        </div>
                    <img src={aboutpage} alt="" className="img-fluid" style={{ maxHeight: "450px", }} ></img>
                </div>
            </div>
        )
    }
}