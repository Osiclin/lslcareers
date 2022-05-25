export default function DetailsCard() {
    return(
        <div style={{maxWidth: "1024px", margin: "0 auto", display: "flex", flexWrap: "wrap"}}>
            <div style={{maxWidth: "500px"}}>
                <img src="" width="500px" height="500px" alt="" />
            </div>
            <div style={{marginLeft: "2rem"}}>
                <div style={{display: "flex", alignItems: "baseline"}}>
                    <h2 style={{width: "100px", marginBottom: 0}}>Title:</h2>
                    <p style={{wordWrap: "break-word", fontSize: "1.5rem", marginBottom: 0}}>Avengers</p>
                </div>
                <div style={{display: "flex", alignItems: "baseline"}}>
                    <h2 style={{width: "100px", marginBottom: 0}}>Year:</h2>
                    <p style={{wordWrap: "break-word", fontSize: "1.5rem", marginBottom: 0}}>Avengers</p>
                </div>
                <div style={{display: "flex", alignItems: "baseline"}}>
                    <h2 style={{width: "100px", marginBottom: 0}}>Type:</h2>
                    <p style={{wordWrap: "break-word", fontSize: "1.5rem", marginBottom: 0}}>Avengers</p>
                </div>
            </div>
        </div>
    )
}