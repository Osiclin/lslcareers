import MovieCardContainer from "../Components/MovieCardContainer/MovieCardContainer";
import Search from "../Components/Search/Search";
import { useState, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import { getAllMovies } from "../services";

export default function Home() {
    const [movieList, setMovieList] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        getMovies()
    }, [])
    
    const getMovies = async () => {
        const res = await fetch(getAllMovies, {
            method: 'GET',
            headers: {
            'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
            }
        })

        const data = await res.json()
        setMovieList(data.results)
    }

    return(
        <div>
            <MovieContext.Provider value={{movieList, setMovieList}}>
                <Search/>
                <MovieCardContainer/>
            </MovieContext.Provider>
        </div>
    )
}