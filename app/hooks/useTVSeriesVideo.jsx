import { useState } from "react"
import axios from "axios"


export default function useTVSeriesVideo () {
    const [seriesVideo, setSeriesVideo] = useState([])
    const [error, setError] = useState(null)

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyOTVhNjNmNjQ0NzRjYjdkN2QzYzA5ZTE2NzI1MCIsIm5iZiI6MTc0MDA0ODI3OC45NzgsInN1YiI6IjY3YjcwNzk2ZWQwYmJjYzUwZjY1NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nASrizC09jmZ3n3SH_p02BqjXyOu01NJJacbqX0-Trk"
    
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,  // Menambahkan Bearer Token pada header
            },
        } 

    const fetchSeriesVideo = async (id) => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, config)
            // console.log(response)
            setSeriesVideo(response.data.results.slice(0,4))
        } catch (error) {
            setError(error)
            // console.log(error)
        }
    }
        

    return { fetchSeriesVideo, seriesVideo, error }
}