import React from 'react';
import { Header, Introduction, CardContainer, Leaders, TeamIntro } from '../../components';
import './WouldDo.css';
import wouldDoBanner from '../../assets/wouldDoBanner.png';


const WouldDo = () => (
  <div className="WouldDo">
    <Header image={wouldDoBanner} title="What would we do" description=""/>
  </div>
);

export default WouldDo;
