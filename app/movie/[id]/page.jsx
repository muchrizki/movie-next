import Link from "next/link";
import { FaRegStar } from "react-icons/fa6"
import { IoIosArrowBack } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";


export default async function Movie ({params}) {
    const { id } = await params

    //image url 
    const imageURL = "https://image.tmdb.org/t/p/original/"

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyOTVhNjNmNjQ0NzRjYjdkN2QzYzA5ZTE2NzI1MCIsIm5iZiI6MTc0MDA0ODI3OC45NzgsInN1YiI6IjY3YjcwNzk2ZWQwYmJjYzUwZjY1NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nASrizC09jmZ3n3SH_p02BqjXyOu01NJJacbqX0-Trk"
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,  // Menambahkan Bearer Token pada header
        },
    } 

    //fetching movie details
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, config)
    const movie = await res.json()
    console.log(movie) 


    return (
        <>
        
        <div className="backdrop bg-cyan-0 w-[100%] h-[40vh] lg:h-[60vh] relative">  

            <Link href={'/'}>
            <div className="back absolute top-2 left-2 md:top-5 md:left-5 bg-[#0575E6] text-white border-white border-1 rounded-full hover:text-white hover:border-[0.7px] hover:bg-black hover:border-white active:text-white active:border-[0.7px] active:bg-black active:border-white transition cursor-pointer">
                <IoIosArrowBack className=" text-4xl -translate-x-[1px]  p-1"/>
            </div>
            </Link>
            
            <img src={`${imageURL}${movie.poster_path}`} alt={`${movie.title}-poster`} className="absolute w-[170px] -bottom-23 left-4 rounded-md shadow-lg" />
            <img src={`${imageURL}${movie.backdrop_path}`} alt={`${movie.title}-backdrop`} className="w-[100%] h-[100%] object-cover" />
        </div>

        <div className="konten mt-2 px-4 py-1 w-[100%] bg-cyan-0 overflow-hidden">

            <h3 className="title translate-x-45 font-sans font-semibold tracking-wider text-lg max-w-[150px] min-[375px]:max-w-[200px] md:max-w-[600px] md:tracking-widest md:text-2xl md:mt-2">{movie.title}</h3>
            
            <div className="rating flex gap-2 items-center translate-x-45 ">
                <FaRegStar className="text-yellow-300"/>
                <p className="text-rating text-lg md:text-2xl font-semibold">{movie.vote_average}</p> 
            </div>
            
            <p className="mt-10 px-2 italic tracking-widest">{movie.tagline}</p>

            <div className="genres pr-6 pl-2 mt-4 flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                    <p key={genre.id} className="tracking-wider text-sm md:text-base bg-blue-500 px-4 py-2 rounded-xl text-white">{genre.name}</p>
                ))}
            </div>

            <p className="mt-4 pr-6 pl-2 tracking-wide max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] md:pr-2 md:text-lg">{movie.overview}</p>

            <Link href={movie.homepage} target="_blank">
            <button className="mt-4 sm:mt-6 px-6 py-2 rounded-3xl bg-white text-black border-[0.7px] border-black flex justify-center gap-2 items-center cursor-pointer hover:text-white hover:border-[0.7px] hover:bg-black hover:border-white active:text-white active:border-[0.7px] active:bg-black active:border-white transition">
                <p className="tracking-wide text-sm font-medium -translate-y-[1.5px]">See movies</p>
                <AiFillCaretRight />
            </button>
            </Link>
        </div>

        <div className="videos-trailer-container mt-6 px-4 mb-10">
            <div className="tabs border-b-[0.7px] flex gap-4 px-2 tracking-wider pb-1 font-serif">
                <h3>Production Companies</h3>
            </div>
            <div className="videos-trailer px-2 mt-2 py-4 flex gap-6 flex-wrap">
                {movie.production_companies.map(company => (
                    <div key={company.name} className="one flex gap-2 bg-cyan-0 items-center">
                        <img src={`${imageURL}/${company.logo_path}`} alt={company.name} className="w-[64px]"/>
                        <h3 className="bg-none flex text-base tracking-wider font-medium">{company.name}</h3>
                    </div>
                ))}
                
            </div>
        </div>

        </>
    )
}