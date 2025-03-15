import React, { Component } from "react"
import aboutpage from "../aboutpage.png"
import backhand from "../backhandPointer.svg";
import jslogo from "../jslogo.svg"
import nodejs from "../nodejs.svg"
import cpp from "../cpp.svg"
import react from "../react.svg"
import python from "../python.svg"
import vs from "../vs.svg"
import "./homepage.css";


export default class About extends Component {
    render() {
        return (
            <div style={{ paddingTop: '90px', color: "white", textAlign: "center", fontSize: '1.5rem' }}>
                <h1 style={{ fontSize: "4rem", color: "#5DB9EE" }}>Know About Me!</h1>
                <div id="about1" className="d-flex space-around" style={{ marginTop: "8rem" }}>
                    <p>Hii Everyone, I am <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Jai Singh</i> from <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Uttarakhand</i>, India.<br />As a recent <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Computer Science</i> graduate with a strong foundation in <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Maths </i> and <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Statistics,</i><br /> I'm excited to launch my career in the IT sector as a <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>Front-end Web Developer.</i>

                        With a passion for crafting intuitive and visually stunning user interfaces, I've honed my skills in<i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}> HTML, CSS, JavaScript</i>, and popular <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>front-end frameworks</i><br />Apart from coding, some other activites that I love to do!<br></br>
                        <div style={{ marginTop: "20px" }}>
                            <img src={backhand} alt="" style={{ height: "30px", width: "40px" }}></img> Playing Games.<br />
                            <img src={backhand} alt="" style={{ height: "30px", width: "40px" }}></img> Travelling.<br />
                            <img src={backhand} alt="" style={{ height: "30px", width: "40px" }}></img> Drawing.<br />
                            <img src={backhand} alt="" style={{ height: "30px", width: "40px" }}></img> Watching Movies.<br />
                        </div>
                    </p>
                    <img src={aboutpage} alt="" className="img-fluid" style={{ maxHeight: "450px", }} ></img>
                </div>
                <h1 className="project-heading" style={{ fontSize: "3rem" }}>Professional <strong style={{ color: "#5DB9EE", fontSize: "3rem" }}>Skillset </strong></h1>

                <div id="about2" className="d-flex space-around"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px",
                        flexWrap: "wrap",
                        gap:"20px"
                    }}
                >

                    <div style={{
                        height: "200px", width: "200px", borderRadius: "15%", border: ".5px solid white", marginRight: "40px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                        }}>
                        <img src={jslogo} alt="" style={{ marginTop: "30px", boxShadow: "none", pointerEvents: "none" }}></img>
                    </div>


                    <div style={{
                        height: "200px", width: "200px", borderRadius: "15%", border: "1px solid white", marginRight: "40px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                        }}>
                        <img src={nodejs} alt="" style={{ boxShadow: "none", pointerEvents: "none" }}></img>
                    </div>
                    <div style={{
                        height: "200px", width: "200px", borderRadius: "15%", border: "1px solid white", marginRight: "40px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                        }}>
                        <img src={cpp} alt="" style={{ marginTop: "30px", boxShadow: "none", pointerEvents: "none" }} ></img>
                    </div>
                    <div style={{
                        height: "200px", width: "200px", borderRadius: "15%", border: "1px solid white", marginRight: "40px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                        }}>
                        <img src={react} alt="" style={{ marginTop: "30px", boxShadow: "none", pointerEvents: "none" }} ></img>
                    </div>

                    <div style={{
                        height: "200px", width: "200px", borderRadius: "15%", border: "1px solid white", marginRight: "40px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                        }}>
                        <img src={python} alt="" style={{ marginTop: "30px", boxShadow: "none", pointerEvents: "none" }} ></img>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                    <h1 className="project-heading" style={{ fontSize: "3rem", marginTop: "50px" }}><strong style={{ color: "#5DB9EE", fontSize: "3rem" }}>Tool </strong>I use</h1>
                    <div style={{
                        height: "200px", width: "200px", borderRadius: "15%", border: "1px solid white", marginRight: "40px", marginTop: "20px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";
                        }}>
                        <img src={vs} alt="" style={{ marginTop: "30px", boxShadow: "none", pointerEvents: "none" }}></img>
                    </div>
                </div>
                
            </div >
        )
    }
}