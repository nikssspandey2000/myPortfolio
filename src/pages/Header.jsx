import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CiHome, CiUser } from "react-icons/ci";
import Logo from '../assets/images/N.png'

const Header = () => {
  const activeCSS = "sm:text-md lg:text-xl font-mono text-orange-400 m-2 hover:text-slate-300";
  const inactiveCSS = "sm:text-md lg:text-xl font-mono text-white m-2 hover:text-slate-300";
  return (
    <section className='z-50 w-full bg-slate-700 flex flex-col pt-6 sticky top-[-8.5rem]'>
        <Link to="/" className="lg:text-2xl sm:text-lg font-semibold p-2 text-white flex items-center flex-col justify-center"><span><img src={Logo} alt="Logo" className='w-[50px] h-[50px] rounded-full'/></span>Nikesh Pandey | CA</Link>
        <hr className='mt-2 mb-2' />
        <div className='w-full flex items-center justify-center flex-row gap-2 sticky'>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/">Home</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/about">About</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/articles">Article</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/qualifications">Education</NavLink>
          <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/services">Services</NavLink>
        </div>
    </section>
  )
}

export default Header