import React, {useState} from 'react';
import './descriptioncard.css';

function DescriptionCard(props) {

    return (
        <div className={`descriptioncard ${ props.style }`}>
            <div className="descriptioncard__header">
                <div className="descriptioncard__number">{ props.number }</div>
                <div className="descriptioncard__title">{ props.title }</div>
            </div>
            <div className="descriptioncard__text">{ props.text }</div>
        </div>
    )
}

export default DescriptionCard