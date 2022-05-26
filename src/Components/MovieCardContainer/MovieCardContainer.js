import MovieCard from "../MovieCard";
import styles from "./MovieCardContainer.module.css"
import { useContext } from "react";
import MovieContext from "../../context/MovieContext"
import Spinner from "../Spinner/Spinner"

export default function MovieCardContainer() {
    const {movieList} = useContext(MovieContext)

    return(
        <div className={styles.container}>
            {
                movieList.length === 0 ? <Spinner/> :
                movieList?.map((movie, i) => 
                <MovieCard
                    key={i}
                    movie={movie}
                />
                )
            }
        </div>
    )
}