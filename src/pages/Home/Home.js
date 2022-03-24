import React from 'react';
import './Home.css';
import { Header, Introduction, CardContainer, Leaders, TeamIntro } from '../../components';
import city from '../../assets/city.jpg';

const Home = () => (
  <div className="Home">
    <Header image={city} title="A special purpose investment company" description="You invest in our deep domain expertise"/>
    <Introduction />
    <CardContainer />
    <Leaders />
    <TeamIntro withButton />
  </div>
);

export default Home;
