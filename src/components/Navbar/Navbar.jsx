import React,{useState, useEffect} from 'react'
import {BiPhoneCall, BiSolidMoon, BiSolidSun} from 'react-icons/bi'
import {FaCaretDown} from 'react-icons/fa'
import {HiMenuAlt1,HiMenuAlt3} from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'


const Navbar = () => {

  //set light and dark background color in localStorage
  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element  = document.documentElement;

  useEffect(()=>{
    if(theme === 'dark'){
      element.classList.add('dark')
      localStorage.setItem('theme','dark')
    }
    else{
      element.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  },[theme])

  const [showMenu, setShowMenu] = useState(false) 
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    <>
  <header className=" relative z-[99] bg_navbar text-white border-b-[1px] border-primary/50">
    <div className="container flex items-center justify-between h-[70px] py-2 sm:space-x-5">
     <div className="logo text-2xl md:text-3xl text-white">
       <a href="#">COZ <span className='inline-block font-bold text-primary md:space-x-3 '>WEB</span></a>
     </div>

     <div className="navigation hidden md:block">
       <ul className='flex items-center gap-10'>
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] h-[72px]'>Home
            <span>
              <FaCaretDown className ='transitions-all duration-200 group-hover:rotate-180'/>
            </span>
            </a>
            <div className='absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md'>
              <ul className='space-y-3'>
               <li className='p-2 hover:bg-violet-200'>Services</li>
               <li className='p-2 hover:bg-violet-200'>About us</li>
               <li className='p-2 hover:bg-violet-200'>Privacy policy</li> 
              </ul>         
            </div>
          </li>
          <li className='group cursor-pointer'>
          <a href="#" className='flex items-center gap-[2px] h-[72px]'>Services
            <span>
              <FaCaretDown className ='transitions-all duration-200 group-hover:rotate-180'/>
            </span>
            </a>
            <div className='absolute left-0 z-[9999] hidden rounded-md bg-white p-2 text-black group-hover:block shadow-md w-full'>
              <div className='grid grid-cols-3 gap-5'>
                <div className='overflow-hidden'>
                  <img src="https://picsum.photos/200" alt="pics" className='max-h-[300px] w-full rounded-b-3xl object-fill'/>       
                </div>

                <div className='col-span-2'>
                  <h1 className='text-xl font-semibold pb-3'>Best selling</h1>
                  <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum exercitationem est. Quam ratione alias eveniet modi fuga ut cupiditate expedita laudantium vitae sunt et, minus quaerat voluptas neque consequuntur itaque ipsam minima exercitationem suscipit.</p> 

                  <div className="grid grid-cols-3 ">
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Development
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Web development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          IOS App Development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Other Services
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Cloud Services
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Mobile App
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <div>
                        <img src="https://picsum.photos/180" alt="no image" />
                      </div>
                    </div>
                    
               </div>    
              </div>      
            </div>             
          </li>
          <li>Contact</li>

          <div>
           <BiPhoneCall  className='text-2xl h-[40px] w-[40px] p-2 rounded-md text-white bg-primary hover:bg-primary/90'/>
          </div>

          <div>
            <p>Call us on</p>
            <p><a href="+8412343556">+84 12343556</a></p>             
          </div>
          {
            theme === 'dark' ? (
              <BiSolidSun className = 'text-2xl' onClick={() => setTheme("light")}/>
            ) : (
              <BiSolidMoon className = 'text-2xl' onClick={() => setTheme("dark")}/>
            )
          }
       </ul>
     </div>

     <div className="flex items-center gap-4 md:hidden md:space-x-3">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all" 
                size={30}     
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}  
                className="cursor-pointer transition-all" 
                size={30}
              />
            )}
          </div>
    </div>     
   </header>
   <ResponsiveMenu showMenu = {showMenu}/>
   </>
  )
}

export default Navbar