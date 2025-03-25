export default function codeIcon({codeIcon}){
    return (
        <>
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
                        <img src={codeIcon} alt="" style={{ marginTop: "30px", boxShadow: "none", pointerEvents: "none"}}></img>
                    </div>
        </>
    )
}