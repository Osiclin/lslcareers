export default function Search() {
    return(
        <div style={{maxWidth: "1024px", margin: "0 auto 6rem", display: "flex", justifyContent: "flex-end"}}>
            <form style={{display: "flex", height: "40px", maxWidth: "600px", width: "600px"}}>
                <input placeholder="Search for local movies" style={{height: "40px", padding: "0rem .5rem", width: "100%", outline: 0, marginRight: ".1rem"}} />
                <button style={{height: "44px", cursor: "pointer", padding: "0 2rem", backgroundColor: "#000000", color: "#ffffff", border: 0}}>Search</button>
            </form>
        </div>
    )
}