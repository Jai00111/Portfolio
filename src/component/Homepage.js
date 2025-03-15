import "./homepage.css";
import porfolioImage from "../porfolioImage.png"
import React from "react";
import Type from "../Type.js";
import resume from"../Jai Resume.pdf"



function Homepage() {
    const handleResumeClick = () => {
        window.open(resume, '_blank');
      };
    
    
    return (
        <div className="content" style={{ paddingTop: '90px' }}>
            <h1 className="intro" style={{ fontSize: "4rem", color: "#fff", marginLeft: "40px" }}>
                Hii There<span className="wave" role="img" aria-labelledby="wave" style={{fontSize:"4rem"}}>👋🏻</span><br/><span style={{fontSize: "4rem" }}> I'm <strong style={{ color: "#5DB9EE", fontSize: "4rem" }}>Jai Singh</strong></span>
            </h1>
            <p style={{ color: "#5DB9EE", marginLeft: "40px" ,fontSize:"2rem"}}>
                <Type />
            </p>

            <div className="Enthusiastic" style={{ display: "flex", justifyContent: "space-around" }}>
            <p className="detail" style={{
                fontSize: "1.1rem",
                color: "#fff",
                maxWidth: "38rem",
                lineHeight: "1.8rem",
                textAlign:"center"
            }}>
                Enthusiastic and dedicated <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>B.Sc. Computer Science</i> graduate with a solid foundation in <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>web-development.</i> Eager to apply technical skills and problem-solving abilities in a dynamic environment. Seeking an entry-level position in  <i style={{ color: "#5DB9EE", fontSize: "1.3rem" }}>frontend web development</i> or related field to contribute to innovative projects and gain practical experience.
            </p>
            <img src={porfolioImage} alt="" className="img-fluid" style={{maxHeight: "450px"}}></img>
            </div>
            {/* <div className="btn-container" style={{
                border: ".1rem solid #5DB9EE",
                fontSize: "1.1rem",
                padding: ".8rem 1.5rem",
                borderRadius: ".5rem",
                cursor: "pointer"
            }}></div> */}

            <div style={{ textAlign: "center", paddingTop: "30px", color: "white", fontSize: "1.3rem" }}>
                <h1 >LET ME <span style={{ color: "#5DB9EE" }}>INTRODUCE</span> MY SELF</h1>
                <p>I fell in love with programming and I have al least learnt something, I think...🤷‍♂️</p>
                <p>My field of Interest's are building new<i style={{ color: "#5DB9EE", fontStyle: "italic" }}> Web Technologies and Product</i> and also in areas related to <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>Blockchain.</i> </p>
                <p>Whether possible, I also apply my passion for developing products with<i style={{ color: "#5DB9EE", fontStyle: "italic" }}> Node.js </i>and <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>Javascript Library and Framework </i>like <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>React.js</i></p>
                <div>
                    <img src={require('./jaiportfolio.jpg')} alt="" className="image-hover" style={{ opacity: ".9", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 1rem #fff, inset 0 0 1rem #fff, 0 0 2rem #3877FF, inset 0 0 2rem #3877FF";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"; }} /></div>
                <div style={{ textAlign: "left", marginLeft: "100px" }}> <button type="button" className="btn" style={{backgroundColor:"blue", color:"white"}}onClick={handleResumeClick} >
                    View Resume
                </button></div>
            </div>
            <div style={{ textAlign: "center", color: "white", marginTop: "20px", fontSize: "1.3rem" }}>
                <h1 style={{ color: "#5DB9EE", fontSize: "4rem" }}> FIND ME ON</h1>
                <p>Fell free to <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>connect</i> with me</p>
            </div>
                       

        </div>
    );
}

export default Homepage;
