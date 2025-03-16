

export default function CarouselSkeleton () {

    return (
        <div className="carousel-skeleton animate-pulse w-[100%] h-[100vh] bg-gray-400">
            
            <div className="konten absolute bottom-20 md:bottom-35 left-3 md:left-25 lg:left-20 xl:left-27">
                <p className='bg-gray-300 animate-pulse w-64 h-6 rounded-full '></p>
                <p className='bg-gray-300 animate-pulse mt-2 w-32 h-3 rounded-full '></p>

                <p className='bg-gray-300 animate-pulse mt-6 w-76 md:w-80 xl:w-84 h-5 rounded-full '></p>
                <p className='bg-gray-300 animate-pulse mt-2 w-85 md:w-89 xl:w-93 h-5 rounded-full '></p>
                <p className='bg-gray-300 animate-pulse mt-2 w-80 md:w-84 xl:w-84 h-5 rounded-full '></p>
                <p className='bg-gray-300 animate-pulse mt-6 w-32 h-5 rounded-full '></p>
            </div>
            
        </div>
    )
}