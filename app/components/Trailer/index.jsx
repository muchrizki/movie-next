import { Alert } from "antd"


export default function Trailer ({ movieVideo }) {

    return (
        <div className="trailer py-16 max-w-[1280px] mx-auto bg-gradient-to-r from-[#0575E6] via-[#021B79] to-[#0575E6]">

          <h3 className="trailer pl-16 font-semibold text-3xl lg:ml-10 tracking-widest font-serif text-amber-300 mb-4">Trailer</h3>
          
          <div className="container-trailer px-12 flex flex-col bg-cyan-0 xl:pl-18 justify-start flex-wrap gap-4 md:gap-6 lg:gap-2 md:flex-row w-[100%] mt-4">

            {movieVideo.length ? 
              movieVideo.map(video => (
              <div key={video.id} className="mt-4 w-[100%] max-w-[400px] md:max-w-[320px] lg:max-w-[222px] xl:max-w-[280px] bg-amber-200 h-[400px] rounded-2xl overflow-hidden">
                <iframe className="w-[100%] h-[100%]" src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen></iframe>
              </div>
            )) :
                
                <div className="alert mt-4 bg-sky-50 p-0 rounded-md md:ml-5 bg-cyan-0">
                    <Alert
                    className=""
                    message="Videos and Trailer Aren't Available"
                    description="Sorry, video and trailer are not available for this movie/tv series now."
                    type="info"
                    showIcon
                    />
                </div>

            }

          </div>

        </div>
    )
}