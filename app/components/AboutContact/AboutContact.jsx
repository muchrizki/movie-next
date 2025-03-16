import Socmed from "../Socmed";

export default function AboutContact () {

    return (
         <div className="about max-w-[1280px] mx-auto px-6 py-12 bg-[url('https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
        
            <div className="header-about md:pt-10 md:px-10 mt-10 w-100% flex flex-col-reverse items-end md:items-end justify-center gap-6">
            <p className="max-w-[500px] min-[540px]:max-w-[400px] xl:max-w-[550px] tracking-normal text-right -translate-y-12">Find movies or TV series you love anytime and anywhere. Discover the actors and production companies behind those films, and watch videos and trailers for each one.</p>
            <h3 className="about text-4xl font-semibold tracking-wider text-right -translate-y-12">Why Us</h3>
            </div>

            <div className="contact w-[100%]  flex justify-end -translate-y-6 md:px-10">
            <p className="px-7 py-2 bg-gradient-to-r from-cyan-300 to-purple-400 w-fit tracking-wider font-medium text-white cursor-pointer shadow-2xl hover:bg-none hover:border-purple-400 hover:text-purple-400 hover:border-[0.6px]">Contact Us</p>
            </div>

            <div className="socmed w-[100%] flex justify-end text-right md:px-10 -translate-y-7">
                <Socmed />
            </div>


        </div>
    )
}