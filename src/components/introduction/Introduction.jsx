import React, {useState} from 'react';
import './introduction.css';
import buisnessman from '../../assets/buisnessman.png';
import IntroCard from '../introcard/IntroCard';


function Introduction() {

    return (
        <div className='introduction'>
            <IntroCard />
            <div class='introduction__picture'><img src="" alt="" />
                <img src={buisnessman} alt="buisnessman" />
            </div>
        </div>
    )
}

export default Introduction