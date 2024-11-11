import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/images/N.png'

const Header = () => {
  const activeCSS = "font-mono text-orange-400 m-2 hover:text-slate-300";
  const inactiveCSS = "font-mono text-white m-2 hover:text-slate-300";
  return (
    <section className='z-50 w-full bg-slate-700 flex flex-col pt-6 sticky top-[-8.5rem]'>
        <Link to="/" className="lg:text-2xl sm:text-lg font-semibold p-2 text-white flex items-center flex-col justify-center"><span><img src={Logo} alt="Logo" className='w-[50px] h-[50px] rounded-full'/></span>Nikesh Pandey | CA</Link>
        <hr className='mt-2 mb-2' />
        <div className='w-full flex flex-wrap items-center justify-center flex-row gap-2'>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS} text-sm lg:text-lg `} to="/">Home</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS} text-sm lg:text-lg `} to="/about">About</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS} text-sm lg:text-lg `} to="/articles">Article</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS} text-sm lg:text-lg `} to="/qualifications">Education</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS} text-sm lg:text-lg `} to="/services">Services</NavLink>
        </div>
    </section>
  )
}

export default Header