import "./Lowerpage.css"
import resume from "./JaiSingh.pdf";
export default function Lowerpage() {
    const handleResumeClick = () => {
        window.open(resume, '_blank');
    };
    return (
        <>
            <div className="firstdiv">
                <h1 >LET ME <span style={{ color: "#5DB9EE" }}>INTRODUCE</span> MY SELF</h1>
                <p>I fell in love with programming and I have al least learnt something, I think...🤷‍♂️</p>
                <p>My field of Interest's are building new<i style={{ color: "#5DB9EE", fontStyle: "italic" }}> Web Technologies and Product</i> and also in areas related to <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>Blockchain.</i> </p>
                <p>Whether possible, I also apply my passion for developing products with<i style={{ color: "#5DB9EE", fontStyle: "italic" }}> Node.js </i>and <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>Javascript Library and Framework </i>like <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>React.js</i></p>
                
                    <img src={require('./jaiportfolio.jpg')} alt="" className="image-hover" style={{margin:"40px"}} />

            </div>
            <button className="btn" onClick={handleResumeClick} style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block"
            }}>
                View Resume
            </button>
            <div className='seconddiv'>

                <p>Fell free to <i style={{ color: "#5DB9EE", fontStyle: "italic" }}>connect</i> with me</p>
            </div>
        </>
    )
}