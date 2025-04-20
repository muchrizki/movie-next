import axios from "axios"
import { useState } from "react"

export default function useTrendingMovies () {
    const [moviesTrendings, setMoviesTrendings] = useState([])
    const [loadingTrendings, setLoadingTrendings] = useState(false)
    const [error, setError] = useState(null)

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyOTVhNjNmNjQ0NzRjYjdkN2QzYzA5ZTE2NzI1MCIsIm5iZiI6MTc0MDA0ODI3OC45NzgsInN1YiI6IjY3YjcwNzk2ZWQwYmJjYzUwZjY1NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nASrizC09jmZ3n3SH_p02BqjXyOu01NJJacbqX0-Trk"
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,  // Menambahkan Bearer Token pada header
        },
    } 
    
    const fetchTrendingMovies = async() => {
        
        setLoadingTrendings(true)
        
        try {
            const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US", config)
            // console.log(response)
            setMoviesTrendings(response.data.results)
            // console.log(moviesCarousel)
        } catch (error) {
            setError(error)
            // console.log(error)
        } finally {
            setLoadingTrendings(false)
        }

       
    }


    return { moviesTrendings, loadingTrendings, error, fetchTrendingMovies }
}