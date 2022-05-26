import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {    
    return(
        <div style={{marginBottom: '2rem', width: "100%"}}>
            <Link to={`/${movie?._id}`} style={{textDecoration: "none", color: "#000000"}}>
                <div style={{display: "flex"}}>
                    <img 
                        src={movie?.image} 
                        width="100%" 
                        height="300px" 
                        alt={movie.titleOriginal} 
                        loading="lazy"
                    />
                </div>
                <div style={{width: "100%"}}>
                    <p style={{wordWrap: "break-word"}}>{movie.titleOriginal}</p>
                </div>
            </Link>
        </div>
    )
}