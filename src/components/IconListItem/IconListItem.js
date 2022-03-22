import React from 'react';
import PropTypes from 'prop-types';
import './IconListItem.css';


const IconListItem = (props) => (
  <div className="IconListItem">
    <img src={props.image} />
    <div className="IconListItem__title">{props.title}</div>
  </div>
);

IconListItem.propTypes = {};

IconListItem.defaultProps = {};

export default IconListItem;
