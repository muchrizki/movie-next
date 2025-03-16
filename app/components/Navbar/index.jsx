import Image from 'next/image'
import "./Navbar.css"
import { useState, useEffect } from 'react'
import Hamburger from '../Hamburger'

export default function Navbar ({logo, menus, activeNav, handleActiveNav, onSidebar}) {
    
    const [scrollY, setScrollY] = useState(0)   
    
    const handleScroll  = () => setScrollY(window.scrollY)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    })

    // console.log(scrollY)
    
    // console.log(activeNav)

    return (
        <div className={`navbar ${scrollY != 0 ? 'bg-gradient-to-r from-[#0575E6] via-[#021B79] to-[#0575E6]': ''} fixed w-[100vw] text-white z-1002 bg-aqua max-w-[1280px] left-1/2 transform -translate-x-1/2 flex justify-between md:justify-around px-4 md:px-0 items-center py-6 transition ease-in-out`}>
            <Image src={logo} alt='logo'/>

            <ul className="menu hidden md:flex gap-6 ">
                {menus.map(menu => <li key={menu} className={`tracking-widest ${menu.toLowerCase() == activeNav && 'text-amber-300'} font-medium cursor-pointer`} onClick={() => handleActiveNav(menu.toLowerCase())}>{menu}</li>)}
            </ul>

            <div className="singup-and-login hidden md:flex gap-4">
                <button className='tracking-widest font-medium'>Login</button>
                <button className='tracking-widest font-medium'>Sign Up</button>
            </div>

            <Hamburger onSidebar={onSidebar} />
        </div>
    )
}