import React from 'react';
import './OurEthos.css';
import EthosCard from '../EthosCard/EthosCard';

import compassIcon from '../../assets/icons/compass_icon.svg';
import headHeartIcon from '../../assets/icons/headHeart_icon.svg';
import brainIcon from '../../assets/icons/brain_icon.svg';
import handStarIcon from '../../assets/icons/handStar_icon.svg';

const ethosCards = [
  { id: 1, title: "Moral Compass", image: compassIcon, text: "We identify ourself as Go-Getter’s and we seek for mavericks who share the same compass with us." },
  { id: 2, title: "Empathy", image: headHeartIcon, text: "We will build protracted journey that dictate fortitude to make arduous and sometimes loathed decisions. We have travelled this road many a times, having a deep understanding of the challenges, knowing what it entails to build business from the ground up, also restructuring business to move them into upward growth trajectory." },
  { id: 3, title: "Winning as a mindset", image: brainIcon, text: "We do not presume, nor do we make believe we have all the answers, but we know success requires, fervor, grit, and orthogonal thinking that comes from divergent expertise and experience." },
  { id: 4, title: "Pride in Excellence", image: handStarIcon, text: "We take ownership and pride in our work, setting a high bar and holding ourselves accountable to the expanse goals, the objectives we have set, always striving to get better." }
];

const OurEthos = () => (
  <div className="OurEthos">
    <div className='ourethos__title'>Our Ethoss</div>
    <div className='ourethos__cardscontainer'>
      {ethosCards.map(ethosCard => <EthosCard key={ethosCard.id} title={ethosCard.title} image={ethosCard.image} text={ethosCard.text} />)}
    </div>
  </div>
);

export default OurEthos;
