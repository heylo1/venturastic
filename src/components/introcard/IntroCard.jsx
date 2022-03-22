import React, {useState} from 'react';
import './introcard.css';
import Button from '../button/Button';

function IntroCard(props) {

    return (
        <div className='introcard'>
            <p className="introcard__greeting">{props.greeting}</p>
            <h2 className="introcard__title">{props.title}</h2>
            <p className="introcard__text">{props.text}</p>
            {props.btnText ? <Button btnText={props.btnText}/> : null}
        </div>
    )
}

export default IntroCard