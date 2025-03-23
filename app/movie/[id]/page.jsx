
import Link from "next/link";
import { FaRegStar } from "react-icons/fa6"
import { IoIosArrowBack } from "react-icons/io";

export default async function Movie ({params}) {
    const { id } = params
    
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyOTVhNjNmNjQ0NzRjYjdkN2QzYzA5ZTE2NzI1MCIsIm5iZiI6MTc0MDA0ODI3OC45NzgsInN1YiI6IjY3YjcwNzk2ZWQwYmJjYzUwZjY1NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nASrizC09jmZ3n3SH_p02BqjXyOu01NJJacbqX0-Trk"
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,  // Menambahkan Bearer Token pada header
        },
    } 

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, config)
    const movie = await res.json()

    console.log(movie)

    const imageURL = "https://image.tmdb.org/t/p/original/"
    

    return (
        <>
        
        <div className="backdrop bg-cyan-0 w-[100%] h-[40vh] relative">  

            <Link href={'/'}>
            <div className="back absolute top-2 left-2 md:top-5 md:left-5 bg-[#0575E6] text-white border-white border-1 rounded-full hover:text-white hover:border-[0.7px] hover:bg-black hover:border-white transition cursor-pointer">
                <IoIosArrowBack className=" text-4xl -translate-x-[1px]  p-1"/>
            </div>
            </Link>
            
            <img src={`${imageURL}${movie.poster_path}`} alt={`${movie.title}-poster`} className="absolute w-[170px] -bottom-23 left-4 rounded-md shadow-lg" />
            <img src={`${imageURL}${movie.backdrop_path}`} alt={`${movie.title}-backdrop`} className="w-[100%] h-[100%] object-cover" />
        </div>

        <div className="konten mt-2 px-4 py-1 w-[100%] bg-cyan-0 overflow-hidden">

            <h3 className="title translate-x-45 font-sans font-semibold tracking-wider text-lg max-w-[200px] md:max-w-[600px] md:tracking-widest md:text-2xl md:mt-2">{movie.title}</h3>
            
            <div className="rating flex gap-2 items-center translate-x-45 ">
                <FaRegStar className="text-yellow-300"/>
                <p className="text-rating text-lg md:text-2xl font-semibold">{movie.vote_average}</p> 
            </div>
            
            <div className="genres pr-6 pl-2 mt-10 flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                    <p key={genre.id} className="tracking-wider text-sm md:text-base bg-blue-500 px-4 py-2 rounded-xl text-white">{genre.name}</p>
                ))}
            </div>

            <p className="mt-4 pr-6 pl-2 tracking-wide font-sans max-w-[500px] md:max-w-[700px] md:pr-2 md:text-lg">{movie.overview}</p>
        </div>

        </>
    )
}