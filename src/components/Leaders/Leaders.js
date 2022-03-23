import React from 'react';
import './Leaders.css';
import IntroCard from '../introcard/IntroCard';
import IconList from '../IconList/IconList';

import pcIcon from '../../assets/icons/pc_icon.png';
import purposeIcon from '../../assets/icons/purpose_icon.png';
import borderlessIcon from '../../assets/icons/borderless_icon.png';
import holisticIcon from '../../assets/icons/holistic_icon.png';


const icons = [
  { id: 1, title: "WHAT WOULD WE DO", image: pcIcon },
  { id: 2, title: "Special Purpose Investments the Venturastic way", image: purposeIcon },
  { id: 3, title: "Borderless Investing Community with focused vertical", image: borderlessIcon },
  { id: 4, title: "Holistic view to invest in the best opportunities", image: holisticIcon }
];

const Leaders = () => (
  <div className="Leaders">
    <IntroCard greeting='Who We Are' title='We are Leaders on the Market' text='We will identify, conceive and build business that will create substantial long-term value for our investing community' btnText='READ MORE'/>
    <IconList icons={icons} />
  </div>
);

export default Leaders;
