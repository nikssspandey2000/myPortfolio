import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  const activeCSS = "text-xl font-mono text-orange-400 m-2 hover:text-slate-300";
  const inactiveCSS = "text-xl font-mono text-white m-2 hover:text-slate-300";
  return (
    <section className='z-50 w-full bg-slate-700 flex flex-col'>
        <Link to="/" className="text-2xl font-semibold p-2 text-white">Nikesh Pandey | CA</Link>
        <hr className='mt-2 mb-2' />
        <div className='sticky top-0 w-full flex items-center justify-center flex-row gap-4 '>
        <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/">Home</NavLink>
        <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/about">About</NavLink>
        <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/articles">Articles</NavLink>
        <NavLink className={({isActive})=>`${isActive? activeCSS : inactiveCSS}`} to="/qualifications">Qualifications</NavLink>
        </div>
    </section>
  )
}

export default Header