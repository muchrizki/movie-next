

import { Carousel } from "antd"
import { AiFillCaretRight } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6"
import { FaEye } from "react-icons/fa";

import"./Carousel.css"

export default function CarouselComponent ({movies}) {
    // console.log(movies)
    const imageURL = "https://image.tmdb.org/t/p/original"



    return (
        
        <Carousel arrows draggable autoplay infinite autoplaySpeed={4000} className="max-w-[1280px] mx-auto">
            {
                movies.map(movie => ( 
                    <div className="item-carousel max-w-[1280px] mx-auto w-[100vw] h-[100vh] relative">

                        <div className="konten absolute text-white max-[375px]:bottom-27 bottom-22 min-[390px]:bottom-35 min-[412px]:bottom-50 min-[540px]:bottom-20 sm:bottom-55 lg:bottom-16 left-9 sm:left-14 lg:left-18 xl:left-28">
                            <h3 className="title text-3xl sm:text-4xl font-semibold tracking-wider">{movie.title}</h3>

                            <div className="rating-category mt-2 flex items-center gap-3">
                                <div className="rating flex gap-2 items-center ">
                                    <FaRegStar className="text-yellow-300"/>
                                    <p className="text-rating text-lg">{movie.vote_average}</p> 
                                </div>
                                
                                <div className="category flex justify-center items-center gap-3">
                                    <p>|</p>
                                    <FaEye className="mt-[4px]"/>
                                    <p className="text-lg">{movie.popularity}</p>
                                </div>
                            </div>

                            <p className="max-w-[300px] sm:max-w-[500px] mt-3 text-base sm:text-xl tracking-wider">{movie.overview}</p>
                            <button className="mt-4 sm:mt-6 px-6 py-2 rounded-3xl bg-white text-black flex justify-center gap-2 items-center cursor-pointer hover:text-white hover:border-[0.7px] hover:bg-black hover:border-white transition">
                                <p className="tracking-widest font-medium -translate-y-[1.5px]">Details</p>
                                <AiFillCaretRight />
                            </button>
                        </div>

                        <img src={`${imageURL}/${movie.backdrop_path}`} alt={movie.title}
                        className="w-[100%] h-[100%] object-cover"
                        />

                    </div>
                ))
            }

        </Carousel>
    )
}