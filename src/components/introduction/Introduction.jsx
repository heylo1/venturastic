import React, {useState} from 'react';
import './introduction.css';
import buisnessman from '../../assets/buisnessman.png';
import IntroCard from '../introcard/IntroCard';


function Introduction() {

    return (
        <div className='introduction'>
            <IntroCard greeting='Welcome there!' title='Welcome to the Best Business Support Company' text='Venturastic Fund’s is a Special Purpose Investment Holding Company (SPIC) formed with an impetus for creating, building business, & Merger and Acquisition, it will aim at developing itself as a strong global player, by building a proven track record and achieving significant milestones in the next 5 years.' btnText='Read more'/>
            <div class='introduction__picture'>
                <img src={buisnessman} alt="buisnessman" />
            </div>
        </div>
    )
}

export default Introduction