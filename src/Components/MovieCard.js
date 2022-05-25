import { useState } from "react"

export default function MovieCard() {
    const [view, setView] = useState({
        text: "black",
        background: "#ffffff"
    })
    
    return(
        <div style={{marginBottom: '2rem', width: "100%"}}>
            <div style={{width: "100%"}}>
                <img src="" width="100%" height="300px" alt="" />
            </div>
            <div style={{width: "100%"}}>
                <p style={{wordWrap: "break-word"}}></p>
                <div 
                    style={{
                        border: "1px solid black", 
                        width: "max-content", 
                        padding: ".5rem 1rem", 
                        cursor: "pointer", 
                        color: view.text, 
                        backgroundColor: view.background
                    }}
                    onMouseEnter={() => setView({text: '#ffffff', background: "#000000"})}
                    onMouseLeave={() => setView({text: '#000000', background: "#ffffff"})}

                >
                    View
                </div>
            </div>
        </div>
    )
}