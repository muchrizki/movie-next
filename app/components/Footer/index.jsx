import Image from "next/image"

export default function Footer ({logo, menus, activeNav, handleActiveNav}) {

    return (
        <div className="footer flex flex-col gap-4 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-around max-w-[1280px] mx-auto bg-gradient-to-r from-[#0575E6] via-[#021B79] to-[#0575E6] text-white py-8 px-6">
                
            <div className="">
                <Image src={logo} alt=''/>
            <p className='max-w-[300px] mt-4 text-sm tracking-wider'>Enjoy your days with the latest movies and TV series. Don't miss the fun moments with your beloved family.</p>
            </div>

            <ul className="flex flex-row h-fit list-none gap-4 md:gap-6 md:translate-y-11">

                {menus.map(menu => <li key={menu} className={`tracking-wide font-serif text-base font-medium ${menu.toLowerCase() == activeNav && 'text-amber-300'} cursor-pointer`} onClick={() => handleActiveNav(menu.toLowerCase())}>{menu}</li>)}
                
                {/* <li className='tracking-wide font-serif text-base font-medium cursor-pointer'>Trendings</li>
                <li className='tracking-wide font-serif text-base font-medium cursor-pointer'>Movie</li>
                <li className='tracking-wide font-serif text-base font-medium cursor-pointer'>TV Series</li> */}
            </ul>        

            <div className="lg:translate-y-10 h-fit">
            <h3 className='font-serif text-2xl'>Mail me</h3>
            <p>muchrizkimubarok@gmail.com</p>
            </div>

        </div>
    )
}