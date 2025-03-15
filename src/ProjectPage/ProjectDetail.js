
import React from "react";
import Portfolio from "./Portfolio.png"
import TextUtil from "./TextUtil.png"
import EmailValidator from "./EmailValidator.png"
import tictactoe from "./tictactoe.png"
function ProjectDetails() {
    return (
        <div
            className="container row offse t-1"
            style={{ display: "flex", gap: "50px", justifyContent: "space-around", alignItems:"center", textAlign:"center",margin:"0 auto" }}>

            <div style={{ display:"flex",flexDirection:"column", justifyContent:"center" , gap:"10px", border:"1px solid white", height:"600px", width:"400px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";}}>
                <img
                    src={Portfolio}
                    className="card-img -top"
                    alt=""
                   style={{boxShadow: "none", pointerEvents: "none"}}
                    
                />
                <div  style={{boxShadow: "none", pointerEvents: "none"}}>
                    <h5 style={{color: "#5DB9EE"}}>MyPersonalPortfolio</h5>
                    <p style={{color:"white", fontSize:"1rem"}}>
                        My Personal Portfolio is a website I have build using JavaScript,
                        HTML, CSS and framework like Bootstrap. I have also used react.js
                        which a javaScript framework. You can connect with me throw this
                        website.
                    </p>
                </div>
                <a href="https://github.com/Jai00111/Portfolio" className="btn btn-dark btn-sm" style={{width:"200px", margin:"0 auto"}}> view in Github </a>
            </div>

            <div  style={{ display:"flex",flexDirection:"column", justifyContent:"center" , gap:"10px", border:"1px solid white", height:"600px", width:"400px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";}}>
                <img
                    src={TextUtil}
                    className="card-img -top"
                    alt="airbnb"
                    style={{boxShadow: "none", pointerEvents: "none"}}
                />
                <div  style={{boxShadow: "none", pointerEvents: "none"}} >
                    <h5  style={{color: "#5DB9EE"}}> TextUtils Website</h5>
                    <p style={{color:"white", fontSize:"1rem"}}>
                        This website is typically a tool-based platform that provides
                        various utilities for working with text. These tools allow users to
                        manipulate, transform, and analyze text in various ways without
                        requiring any advanced programming knowledge.
                    </p>
                </div>
                <a href="https://github.com/Jai00111/TextUtils" className="btn btn-dark btn-sm" style={{width:"200px", margin:"0 auto"}}> view in Github </a>
            </div>


            {/* <div  style={{ }}>
                <img
                    src="media/Airbnb.webp"
                    className="card-img -top"
                    alt="airbnb"
                />
                <div className="card-body">
                    <h5 className="card-title">JourneyJunction</h5>
                    <p className="card-text ">
                        A website which allows pe ople to rent out their properties. I have
                        used JavaScript, HTML, CSS and fra meworks loke Bootstrap. and I have
                        build its backend with Node.js. I really enjoy to build such
                        projects.
                    </p>
                </div>
                <a href="http/home" className="btn btn-dark btn-sm">
                    view in Github
                </a>
            </div> */}
            <div  style={{ display:"flex",flexDirection:"column", justifyContent:"center" , gap:"10px", border:"1px solid white", height:"600px", width:"400px" , transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";}}>
                <img
                    src={EmailValidator}
                    className="card-img -top"
                    alt="airbnb"
                    style={{boxShadow: "none", pointerEvents: "none"}}
                />
                <div  style={{boxShadow: "none", pointerEvents: "none"}}>
                <h5  style={{color: "#5DB9EE"}}>Email-validator</h5>
                    <p style={{color:"white", fontSize:"1rem"}}>
                    This email validator verifies that the email address contains the "@" symbol and ensures that there are characters present both before and after it.<br></br> Domain Check: The email validator confirms that the email address includes a domain name and verifies that the domain name is in the correct format.<br></br>Special Characters Check: The email validator examines the email address for the presence of special characters such as !, @, #, $, % etc.
                </p>
                </div>
                <a href="https://github.com/Jai00111/EmailValidator/tree/master/Email%20Validator" className="btn btn-dark btn-sm" style={{width:"200px", margin:"0 auto"}}>
                    view in Github
                </a>
            </div>


            <div  style={{ display:"flex",flexDirection:"column", justifyContent:"center" , gap:"10px", border:"1px solid white", height:"600px", width:"400px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"; }}>
                <img
                    src={tictactoe}
                    className="card-img -top"
                    alt="airbnb"
                    style={{boxShadow: "none", pointerEvents: "none"}}
                />
                <div  style={{boxShadow: "none", pointerEvents: "none"}}>
                <h5  style={{color: "#5DB9EE"}}>Tic-Tac-Toe</h5>
                    <p style={{color:"white", fontSize:"1rem"}}>
                    Tic Tac Toe is a classic multiplayer game played between two players. The game consists of a 3x3 grid, where players take turns placing X and O symbols. The player who gets three of their symbols in a row, column, or diagonal wins the game.<br></br>This game is designed by  using HTML, CSS, and JS only.

                </p>
                </div>
                <a href="https://github.com/Jai00111/Tic-Tac-Toe" className="btn btn-dark btn-sm" style={{width:"200px", margin:"0 auto"}}>
                    view in Github
                </a>
            </div>
            </div>
    );
}
export default ProjectDetails;