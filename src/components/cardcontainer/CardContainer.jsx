import React, {useState} from 'react';
import './cardcontainer.css';
import DescriptionCard from '../descriptioncard/DescriptionCard';

function CardContainer() {

    return (
        <div className='cardcontainer'>
            <DescriptionCard number='01' title='Fashion and Luxury'  text='At the core of every project that will be released by Venturastic in fashion and luxury, there will be quintessentially a strong commitment to unmatched creativity and quality, aligned with the changing needs of the international market.' style='descriptioncard-dark'/>
            <DescriptionCard number='02' title='Media and Entertainment' text='Forward-looking Media and entertainment business, whose mission is to enable unique investment opportunities, by allowing investors to express their aspirations and aesthetics with the highest level of quality and refinement.'/>
            <DescriptionCard number='03' title='Technology' text='Technology growth has been led by the rapid advancement and proliferation of Artificial intelligence, cloud, and machine learning, virtually impacting every business and consumer in its path.' style='descriptioncard-dark' />
        </div>
    )
}

export default CardContainer