
import React from "react";
import Portfolio from "./Portfolio.png"
import TextUtil from "./TextUtil.png"
import EmailValidator from "./EmailValidator.png"
import tictactoe from "./tictactoe.png"
import ProjectDetailcard from "./ProjectDetailcard";
import weatherApp from "./WeatherApp.png"
import NewsBuzz from "./newsbuzz.png"
import Article from "./ArticleZone.png"
function ProjectDetails() {
    return (
        <div
            className="container row offse t-1"
            style={{ display: "flex", gap: "50px", justifyContent: "space-around", alignItems:"center", textAlign:"center",margin:"0 auto" }}>
            
            <ProjectDetailcard ProjectImage={Portfolio} ProjectName={"MyPersonalPortfolio"} Projectdetail={"My Personal Portfolio is a website I have build using JavaScript, HTML, CSS and framework like Bootstrap. I have also used react.js which a javaScript framework. You can connect with me throw this website."} gitUrl={"https://github.com/Jai00111/Portfolio"}/>
            <ProjectDetailcard ProjectImage={TextUtil} ProjectName={"TextUtils website"} Projectdetail={"This website is typically a tool-based platform that provides various utilities for working with text. These tools allow users to manipulate, transform, and analyze text in various ways without requiring any advanced programming knowledge."} gitUrl={"https://github.com/Jai00111/TextUtils"} />
            <ProjectDetailcard ProjectImage={EmailValidator} ProjectName={"Email-Validator"} Projectdetail={"This email validator verifies that the email address contains the @ symbol and ensures that there are characters present both before and after it. The email validator confirms that the email address includes a domain name and verifies that the domain name is in the correct format. The email validator examines the email address for the presence of special characters such as !, @, #, $, % etc."} gitUrl={"https://github.com/Jai00111/EmailValidator/tree/master/Email%20Validator"} />
            <ProjectDetailcard ProjectImage={tictactoe} ProjectName={"Tic-Tac-toe"} Projectdetail={"Tic Tac Toe is a classic multiplayer game played between two players. The game consists of a 3x3 grid, where players take turns placing X and O symbols. The player who gets three of their symbols in a row, column, or diagonal wins the game.This game is designed by  using HTML, CSS, and JS only."} gitUrl={"https://github.com/Jai00111/Tic-Tac-Toe"} />
            <ProjectDetailcard ProjectImage={weatherApp} ProjectName={"Weather-Forecast"} Projectdetail={"Utilized OpenWeatherMap API for accurate weather data.Designed with dynamic background images reflecting current weather conditions. The Weather Forecast website providing real-time weather updates,temperature, humidity, and weather."} gitUrl={"https://github.com/Jai00111/Weather-Forecast"} />
            <ProjectDetailcard ProjectImage={NewsBuzz} ProjectName={"News-Buzz"} Projectdetail={"My news website is a simple and easy-to-use platform that provides the latest news and updates. I built it to share news and information with others. The website features a clean design and is easy to navigate. In this website we can watch and read the latest news about sports, technologies, science, health, bussiness, general, and entertainment too, I used news api to get the news and gained more knowledge about api's . "} gitUrl={"https://github.com/Jai00111/NewsBuzz"} />
            <ProjectDetailcard ProjectImage={Article} ProjectName={"Article-Zone"} Projectdetail={"I developed a full-stack article website that  allows users to read, update, delete, and post their own articles. The website features a user-friendly interface. I used Html, CSS, JavaScript, MU, MongoDb Atlas, and Next.js for development."} gitUrl={"https://github.com/Jai00111/ArticleZon"} />
        
            </div>
    );
}
export default ProjectDetails;