import CodeIcon from "./CodeIcon";
import jslogo from "./jslogo.svg"
import nodejs from "./nodejs.svg"
import react from "./react.svg"
import python from "./python.svg"
import vs from "./vs.svg"
import Mongodb from "./Mongodb.svg"
import Git from "./git.svg"
import next from "./next.svg"
import postman from "./postman.svg"
import vercel from "./vercel.svg"
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
                    <CodeIcon codeIcon={Git}/>
                    <CodeIcon codeIcon={next}/>

                    
                </div>
                <div style={{
                    flexWrap:"wrap",
                    marginTop: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom:"50px",
                    gap: "20px"
                }}
                >
                    <h1 className="project-heading" style={{ fontSize: "3rem", marginTop: "50px" }}><strong style={{ color: "#5DB9EE", fontSize: "3rem" }}>Tool </strong>I use</h1>
                    <CodeIcon codeIcon={vs}/>
                    <CodeIcon codeIcon={postman}/>
                    <CodeIcon codeIcon={vercel}/>
                    </div>
                
        </div>
    )
}