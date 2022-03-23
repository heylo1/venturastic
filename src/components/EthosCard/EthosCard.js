import React from 'react';
import PropTypes from 'prop-types';
import './EthosCard.css';

const EthosCard = (props) => (
  <div className="EthosCard">
    <div className='ethoscard__icon'>
      <img src={props.image} />
    </div>
    <div className='ethoscard__title'>{props.title}</div>
    <div className='ethoscard__text'>{props.text}</div>
  </div>
);

EthosCard.propTypes = {};

EthosCard.defaultProps = {};

export default EthosCard;
