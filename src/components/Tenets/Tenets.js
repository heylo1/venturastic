import React from 'react';
import './Tenets.css';
import paperClips from '../../assets/paperClips.png'

const list = [
  { title: "Recapitalise", text: '– dispense business with the necessary financial resources to achieve operating efficiency and recalibrate the capital structure.' },
  { title: "Restructure", text: '– recalibrate the debt structure through restructuring and/or refinancing initiatives.' },
  { title: "Reorganize", text: '– to revaluate and remodel the companies operating and business model and review the managerial structure and governance.' },
  { title: "Relaunch", text: '– support the development and growth of the investee companies, including the injection of additional resources to boost growth also through add on acquisitions.' },
  { title: "Deal Type", text: '– Buy out (majority stake), to support generational transition, expansion to support development programs.' },
];

const Tenets = () => (
  <div className="Tenets">
    <div className='tenets__image'>
      <img src={paperClips} />
      <div className='tennets__image-title'>Tenets of Engagement</div>
    </div>
    <div className='tenets__list'>
      {list.map(card => <div><p className='tenets__list-title'>{card.title}</p> <p className='tenets__list-text'>{card.text}</p></div>)}
    </div>
  </div>
);

export default Tenets;
