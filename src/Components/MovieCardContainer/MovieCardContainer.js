import MovieCard from "../MovieCard";
import styles from "./MovieCardContainer.module.css"

export default function MovieCardContainer() {
    return(
        <div className={styles.container}>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    )
}