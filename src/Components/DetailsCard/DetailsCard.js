import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAMovie } from "../../services"
import Spinner from "../Spinner/Spinner"
import styles from "./DetailsCard.module.css"

export default function DetailsCard() {
    const params = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        getMovieById()
    }, [])

    const getMovieById = async () => {
        const res = await fetch(getAMovie + `/` + params.id, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
            }
        })
    
        const data = await res.json()
        
        setMovie(data.result)
    }

    return(
        <div>
            {
                !movie ? <div style={{width: '100%', height: "60vh", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner/></div> :
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img 
                            src={movie?.image} 
                            width="330px" 
                            height="auto" 
                            alt={movie?.title} 
                        />
                    </div>

                    <div>
                        <div style={{display: "flex", alignItems: "baseline"}}>
                            <h2 style={{width: "170px", fontSize: "1.2rem", marginBottom: 0}}>Title:</h2>
                            <p style={{wordWrap: "break-word", fontSize: "1.2rem", marginBottom: 0}}>{movie?.titleOriginal}</p>
                        </div>
                        <div style={{display: "flex", alignItems: "baseline"}}>
                            <h2 style={{width: "170px", fontSize: "1.2rem", marginBottom: 0}}>Year:</h2>
                            <p style={{wordWrap: "break-word", fontSize: "1.2rem", marginBottom: 0}}>{movie?.year}</p>
                        </div>
                        <div style={{display: "flex", alignItems: "baseline"}}>
                            <h2 style={{width: "170px", fontSize: "1.2rem", marginBottom: 0}}>Rating:</h2>
                            <p style={{wordWrap: "break-word", fontSize: "1.2rem", marginBottom: 0}}>{movie?.rating}</p>
                        </div>
                        <div style={{display: "flex", alignItems: "baseline"}}>
                            <h2 style={{width: "170px", fontSize: "1.2rem", marginBottom: 0}}>Release date:</h2>
                            <p style={{wordWrap: "break-word", fontSize: "1.2rem", marginBottom: 0}}>{movie?.release}</p>
                        </div>
                        <div>
                            <h2 style={{width: "170px", fontSize: "1.2rem", marginBottom: 0}}>Description</h2>
                            <p style={{wordWrap: "break-word", fontSize: "1.2rem", marginBottom: 0}}>{movie?.description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}