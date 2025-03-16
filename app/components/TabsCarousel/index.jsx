

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiFillCaretRight } from "react-icons/ai";



export default function TabsCarousel ({movies, handleTab, tabValue, handleTrailerId}) {
    // console.log(tabValue)
    // const skeleton = [1, 2, 3, 4, 5, 6 ]

    const imageURL = "https://image.tmdb.org/t/p/original"
    const responsive = {
        extraLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1280, min: 1024 },
          items: 5,
          slidesToSlide: 2
        },
    
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1024, min: 912 },
          items: 4,
          slidesToSlide: 2
        },
    
        desktop: {
          breakpoint: { max: 912, min: 768 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 640, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="tabs-trending-movies bg-cyan-0 max-w-[1280px] mx-auto px-8 py-10 bg-[url('https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
    
            <div className="tabs-item mt-12 flex gap-3 max-w-[1280px] md:pl-16">
                <p className={`tracking-widest font-semibold text-base cursor-pointer ${tabValue == 'trendings' ? 'px-4 py-1 rounded-4xl bg-black text-sm text-white border-[0.7px] border-black' :'text-white' }`} onClick={() => handleTab('trendings')}>Trendings</p>
                <p className={`tracking-widest font-semibold text-base cursor-pointer ${tabValue == 'popular' ? 'px-4 py-1 rounded-4xl bg-black text-sm text-white border-[0.7px] border-black' :'text-white' }`} onClick={() => handleTab('popular')}>Popular</p>
                <p className={`tracking-widest font-semibold text-base cursor-pointer ${tabValue == 'tv-series' ? 'px-4 py-1 rounded-4xl bg-black text-sm text-white border-[0.7px] border-black' :'text-white' }`} onClick={() => handleTab('tv-series')}>TV Series</p>
            </div>

            <div className="tabs-konten bg-cyan-0 mt-6 mb-16 flex justify-center items-center w-[100%]">
                
              <Carousel 
              responsive={responsive} className="mt-4 bg-amber-0 w-[100%] h-[100%]"
              itemClass="carousel-item-padding-40-px" containerClass="carousel-container pl-8 min-[390px]:pl-13 min-[375px]:pl-10 min-[412px]:pl-15 min-[414px]:pl-15 ">

                  {movies.map(movie => (
                    
                      <div className="card-item w-[230px] h-[290px] rounded-lg shaodow-4xl overflow-hidden cursor-pointer">
                          <img src={`${imageURL}/${movie.poster_path}`} alt="poster-1" />

                          <button className="absolute bottom-3 left-2 sm:mt-6 px-3 py-1 rounded-3xl bg-white text-black flex justify-center gap-2 items-center cursor-pointer hover:text-white hover:border-[0.7px] hover:bg-black hover:border-white transition" onClick={() => handleTrailerId(movie.id)}>
                              <p className="tracking-widest text-xs font-medium translate-x-1 -translate-y-[0.7px]">Trailer</p>
                              <AiFillCaretRight />
                          </button>
                      </div>
                    
                  ))}
              
              </Carousel>

            </div>

        </div>

    )
}