import React, {useState} from 'react';
import './introcard.css';
import Button from '../button/Button';

function IntroCard() {

    return (
        <div className='introcard'>
            <p className="introcard__greeting">Welcome there!</p>
            <h2 className="introcard__title">Welcome to the Best Business Support Company</h2>
            <p className="introcard__text">Venturastic Fund’s is a Special Purpose Investment Holding Company (SPIC) formed with an impetus for creating, building business, & Merger and Acquisition, it will aim at developing itself as a strong global player, by building a proven track record and achieving significant milestones in the next 5 years.</p>
            <Button text="More about us"/>
        </div>
    )
}

export default IntroCard