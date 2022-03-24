import React from 'react';
import './TeamIntro.css';
import Button from '../button/Button';

const TeamIntro = (props) => (
  <div className="TeamIntro">
    <div className="TeamIntro__greating">Our stuff</div>
    <div className="TeamIntro__title">Diversity breeds creativity, leading to better decisions and outcomes at Venturastic</div>
    <div className="TeamIntro__text">We have a formidable, coherent, accomplished team, bringing in differentiated domain expertise, access, thoughtful deliberation and organization building to the business we create and build.</div>
    {props.withButton ? <Button btnText="Read more" /> : null}
  </div>
);

export default TeamIntro;
