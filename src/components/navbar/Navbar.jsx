import React, {useState} from 'react';
import './navbar.css';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
    <p className='navbar__links-active'><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What we would do</a></p>
    <p><a href="#possibility">Corporate governance</a></p>
    <p><a href="#features">First project</a></p>
    <p><a href="#blog">About us</a></p>
    <p><a href="#blog">Our team</a></p>
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
        </div>
    )
}

export default Navbar