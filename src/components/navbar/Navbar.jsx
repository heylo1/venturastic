import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
    <a href="/" className='navbar__links-active'>Home</a>
    <a href="/woulddo">What we would do</a>
    <a href="/corporate-governance">Corporate governance</a>
    <a href="/firstproject">First project</a>
    <a href="/aboutus">About us</a>
    <a href="/ourteam">Our team</a>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__links">
                <Menu />
            </div>

            <div className='navbar__mobile'>
                {toggleMenu
                        ? <RiCloseLine color='#000' size={27} onClick={()=> setToggleMenu(false)} />
                        : <RiMenu3Line color='#000' size={27} onClick={()=> setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        
                            <div className='navbar__mobile-links'>
                                <Menu />
                            </div>
                        
                    )}
            </div>
        </div>
    )
}

export default Navbar