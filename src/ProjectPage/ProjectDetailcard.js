export default function ProjectDetailcard({ProjectImage,ProjectName,Projectdetail,gitUrl}){
    return (
        <>
         <div style={{ display:"flex",flexDirection:"column", justifyContent:"center" , gap:"10px", border:"1px solid white", height:"600px", width:"400px", transition: "box-shadow 0.3s ease-in",
                        boxShadow: "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 0 0.5rem rgba(255, 255, 255, 0.5), inset 0 0 0.5rem rgba(255, 255, 255, 0.5), 0 0 1rem rgba(56, 119, 255, 0.5), inset 0 0 1rem rgba(56, 119, 255, 0.5)";

                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 0 0rem #fff, inset 0 0 0rem #fff, 0 0 0rem #3877FF, inset 0 0 0rem #3877FF";}}>
                <img
                    src={ProjectImage}
                    className="card-img -top"
                    alt=""
                   style={{boxShadow: "none", pointerEvents: "none"}}
                    
                />
                <div  style={{boxShadow: "none", pointerEvents: "none"}}>
                    <h5 style={{color: "#5DB9EE"}}>{ProjectName}</h5>
                    <p style={{color:"white", fontSize:"1rem"}}>
                        {Projectdetail}
                    </p>
                </div>
                <a href={gitUrl} className="btn btn-dark btn-sm" style={{width:"200px", margin:"0 auto"}}> view in Github </a>
            </div>
        </>
    )
}