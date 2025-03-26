import CodeIcon from "./CodeIcon";
import jslogo from "./jslogo.svg"
import nodejs from "./nodejs.svg"
import cpp from "./cpp.svg"
import react from "./react.svg"
import python from "./python.svg"
import vs from "./vs.svg"
import Mongodb from "./Mongodb.svg"
export default function LowerAbout(){
    return(
        <div  style={{ paddingTop: '90px', color: "white", textAlign: "center", fontSize: '1.1rem', marginBottom:"20px" }}>
                <h1 className="project-heading" style={{ fontSize: "3rem" }}>Professional <strong style={{ color: "#5DB9EE", fontSize: "3rem" }}>Skillset </strong></h1>

                <div id="about2" className="d-flex space-around"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px",
                        flexWrap: "wrap",
                        gap: "20px"
                    }}
                >

                    <CodeIcon codeIcon={jslogo}/>
                    <CodeIcon codeIcon={nodejs}/>
                    <CodeIcon codeIcon={react}/>
                    <CodeIcon codeIcon={python}/>
                    <CodeIcon codeIcon={Mongodb}/>
                    

                    
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                    <h1 className="project-heading" style={{ fontSize: "3rem", marginTop: "50px" }}><strong style={{ color: "#5DB9EE", fontSize: "3rem" }}>Tool </strong>I use</h1>
                    <CodeIcon codeIcon={vs}/>
                    </div>
                
        </div>
    )
}