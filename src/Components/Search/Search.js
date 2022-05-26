import { useContext } from "react"
import MovieContext from "../../context/MovieContext"

export default function Search() {
    const { movieList, setSearch } = useContext(MovieContext)

    const search = async (value) => {
        if (value === "") {
            setSearch([])
            return
        }

        let newRegex = new RegExp(`${value}`,"gi") //regex for search
        let result = movieList.filter(item => item.titleOriginal.toLowerCase().match(newRegex)) //get all matching movies
        
        if (result.length > 0) setSearch(result)

        if (result.length === 0) setSearch()
    }

    return(
        <div style={{maxWidth: "1024px", margin: "0 auto 6rem", display: "flex", justifyContent: "flex-end"}}>
            <form style={{display: "flex", height: "40px", maxWidth: "600px", width: "600px"}}>
                <input 
                    id="search" 
                    name="search"
                    placeholder="Search for local movies" 
                    onChange={(e) => search(e.target.value)}
                    style={{
                        height: "40px", 
                        padding: "0rem .5rem", 
                        width: "100%", 
                        outline: 0, 
                        marginRight: ".1rem"
                    }} 
                />
            </form>
        </div>
    )
}