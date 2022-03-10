import React, {useState} from 'react';
import './button.css';

function Button(props) {

    return (
        <div className='button'>
            <p className="button__text">{props.text}</p>
        </div>
    )
}

export default Button