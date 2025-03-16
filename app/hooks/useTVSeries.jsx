import axios from "axios"
import { useState } from "react"

export default function useTVSeries () {
    const [tvSeries, setTvSeries] = useState([])

    const fetchTVSeries = async () => {

        const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyOTVhNjNmNjQ0NzRjYjdkN2QzYzA5ZTE2NzI1MCIsIm5iZiI6MTc0MDA0ODI3OC45NzgsInN1YiI6IjY3YjcwNzk2ZWQwYmJjYzUwZjY1NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nASrizC09jmZ3n3SH_p02BqjXyOu01NJJacbqX0-Trk"
    
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,  // Menambahkan Bearer Token pada header
            },
        } 

        try {
            const response = await axios.get("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", config)
            // console.log(response)
            setTvSeries(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    return { fetchTVSeries, tvSeries }
}