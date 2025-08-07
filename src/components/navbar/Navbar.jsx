import React from 'react';
import logo from '../../../public/asset/text.png'
import logo1 from '../../../public/asset/Button.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>HOME </li>
      <li>
      
       Work
         
    
      </li>
      <li>Services</li>
      <li>Pricing</li>
      </ul>
    </div>
 <a href="/">

    <img src={logo} alt="" />
 </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase gap-10 cursor-pointer menu-horizontal px-1">
      <li>HOME |</li>
      <li>
      
       Work |
         
    
      </li>
      <li>Services |</li>
      <li>Pricing |</li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">
        <img className='w-25 md:w-full' src={logo1} alt="" />
    </a>
  </div>
</div>
        </div>
    );
};

export default Navbar;