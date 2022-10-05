import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import cream from '../images/cream.jpg'

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
           <Link to="/" className='logo'>
            <img scr={cream} alt="Nav Logo" />
           </Link>
        </div>
    </nav>
  )
}

export default Navbar