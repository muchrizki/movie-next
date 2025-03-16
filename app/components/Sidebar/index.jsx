


export default function Sidebar ({menus, activeNav, handleActiveNav, offSidebar}) {
    // console.log(activeNav)

    return (

        <div className="sidebar flex fixed flex-col justify-center gap-2 items-center top-0  w-[70%] right-0 z-1002 h-[100vh] bg-gradient-to-b from-[#0575E6] via-[#021B79] to-[#0575E6]">
          
          <p className="text-white text-2xl font-sans absolute top-10 cursor-pointer active:scale-90 right-10" onClick={() => offSidebar()}>X</p>

          <div className="ul bg-gray-0 text-2xl flex flex-col gap-2">
           {menus.map(menu => <li key={menu} className={`list-none font-serif text-lg tracking-widest cursor-pointer 
            ${menu.toLowerCase() == activeNav ? 'text-amber-300' : 'text-white'}`} onClick={() => handleActiveNav(menu.toLowerCase())}>{menu}</li>)}    
          </div> 

           <div className="singup-and-login mt-6 ml-12 flex flex-col bg-gray-0 gap-2 text-1xl">
              <p className='px-12 py-2 bg-white rounded-full text-blue-900 tracking-widest hover:border-[0.6px] hover:border-white  hover:text-white hover:bg-blue-900 cursor-pointer'>Login</p>
              <p className='px-12 py-2 bg-white rounded-full text-blue-900 tracking-widest hover:border-[0.6px] hover:border-white  hover:text-white hover:bg-blue-900 cursor-pointer'>SignUp</p>
          </div>

        </div>

    )
}