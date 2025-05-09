import axios from "axios"
import { use, useState } from "react"

export default function useMovieVideo () {
    const [movieVideo, setMovieVideo] = useState([])
    const [error, setError] = useState(null)

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyOTVhNjNmNjQ0NzRjYjdkN2QzYzA5ZTE2NzI1MCIsIm5iZiI6MTc0MDA0ODI3OC45NzgsInN1YiI6IjY3YjcwNzk2ZWQwYmJjYzUwZjY1NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nASrizC09jmZ3n3SH_p02BqjXyOu01NJJacbqX0-Trk"
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,  // Menambahkan Bearer Token pada header
        },
    } 
    const fetchMovieVideo = async (id) => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, config)
            // console.log(response)

            setMovieVideo(response.data.results.slice(0,4))
        } catch (error) {
            setError(error)
            // console.log(error)
        }

    }

    return { fetchMovieVideo, movieVideo, error}
}