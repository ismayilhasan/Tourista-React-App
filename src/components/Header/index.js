import React from 'react'
import './style.scss'
import '@fortawesome/fontawesome-free/css/all.css'; 
import headerLogo from '../../assets/images/Logo.jpg'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <header id='Header' className='header-container'>
        <nav className='navbar'>
            <ul className='nav-list'>
                <li className="nav-item"><Link>About Us</Link></li>
                <li className="nav-item"><Link>FAQ</Link></li>
                <li className="nav-item"><Link>Blog</Link></li>
                <li className="nav-item"><Link>Contact Us</Link>s</li>
            </ul>
        </nav> 
        <div className='language-section'>
            <div className='name-of-language'>Us</div>
            <div className='language-arrows'>
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </div>
        </div>
    </header>

    <header id='HeaderLogo' className='header-container'>
        <div className='trip-area'>
            <h5>Destinations</h5>
            <h5>Private trips</h5>
        </div>
        <div className='logo-area'>
            <img src={headerLogo} alt="headerLogo" />
        </div>
        <div className='buttons-area'>
            <button className='lucky-button'>I'm Feeling Lucky</button>
            <Link to="/login" className='login-button'>Login</Link>
        </div>
    </header>
    </>
  )
}

export default Header