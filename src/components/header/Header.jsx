import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className='header' style={{ backgroundImage: `url(${props.image})` }}>
            <div className='header__text'>
                <h1 className='header__text__title'>{props.title}</h1>
                <h2 className='header__text__description'>{props.description}</h2>
            </div>
        </div>
    )
}

export default Header