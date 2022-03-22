import React, {useState} from 'react';
import './button.css';

function Button(props) {

    return (
        <div className='button'>{props.btnText}</div>
    )
}

export default Button