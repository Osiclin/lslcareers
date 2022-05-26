import MovieCard from "../MovieCard";
import styles from "./MovieCardContainer.module.css"
import { useContext } from "react";
import MovieContext from "../../context/MovieContext"
import Spinner from "../Spinner/Spinner"

export default function MovieCardContainer() {
    const { movieList, search } = useContext(MovieContext)

    return(
        <div>
            {
                movieList.length === 0 && search?.length === 0 && <div style={{width: '100%', height: "60vh", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner/></div>
            }
            {
                search === undefined && <div style={{width: '100%', height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h2>No result</h2></div>
            }
            <div className={styles.container}>
                {
                    search !== undefined && search?.length === 0 && movieList?.map((movie, i) => 
                    <MovieCard
                        key={i}
                        movie={movie}
                    />
                    )
                }
                {
                    search !== undefined && search?.map((movie, i) => 
                    <MovieCard
                        key={i}
                        movie={movie}
                    />
                    )
                }
            </div>
        </div>
    )
}