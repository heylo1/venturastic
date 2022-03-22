import React from 'react';
import PropTypes from 'prop-types';
import './IconList.css';
import IconListItem from '../IconListItem/IconListItem';


const IconList = (props) => (
  <div className="IconList">
    {props.icons.map(icon => <IconListItem key={icon.id} title={icon.title} image={icon.image} />)}
  </div>
);

IconList.propTypes = {};

IconList.defaultProps = {};

export default IconList;
