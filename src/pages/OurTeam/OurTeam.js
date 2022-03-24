import React from 'react';
import './OurTeam.css';
import { Header, TeamIntro, PhotoArticle } from '../../components';
import ourTeamBanner from '../../assets/ourTeamBanner.png';

import person1 from '../../assets/ourteam/person1.jpg';
import person2 from '../../assets/ourteam/person2.jpg';
import person3 from '../../assets/ourteam/person3.jpg';
import person4 from '../../assets/ourteam/person4.jpg';

const firstPerson = [
  "With a métier arched across 25 years, he has diverse experience in Technology, Media (Digital and Traditional), Luxury, M&A and Financial service, with an expansive predominant of it in senior management within South East Asia, Middle East North Africa (MENA) and Latin America (LATAM).",
  "He is an adroit leader who can envisage and establish a forward-thinking vision, not just in shaping intricate business strategy, but also curating innovative technology products that gives business an edge over its competition.",
  "He has a distinctive ability to exhilarate audiences in the power of product development, business innovation and eminence, whilst being ingenious and resilient when working under challenging conditions.",
  "His business voyage and his love for Independent Studios, has also given him the distinctive equilibrium and comprehension from being a creative advisor for Independent houses for curating content.",
  "An Avant Garde, under his tactical and organizational experience, the company will capitalize and forefront Venturastic’s SPIC projects.",
  "During his free time, he likes to relax alternating between his 3 favoured activity which is writing, cooking, and travelling."
];

const secondPerson = [
  "With a métier arched across 25 years, he has diverse experience in Technology, Media (Digital and Traditional), Luxury, M&A and Financial service, with an expansive predominant of it in senior management within South East Asia, Middle East North Africa (MENA) and Latin America (LATAM).",
  "He is an adroit leader who can envisage and establish a forward-thinking vision, not just in shaping intricate business strategy, but also curating innovative technology products that gives business an edge over its competition.",
  "He has a distinctive ability to exhilarate audiences in the power of product development, business innovation and eminence, whilst being ingenious and resilient when working under challenging conditions.",
  "His business voyage and his love for Independent Studios, has also given him the distinctive equilibrium and comprehension from being a creative advisor for Independent houses for curating content.",
  "An Avant Garde, under his tactical and organizational experience, the company will capitalize and forefront Venturastic’s SPIC projects.",
  "During his free time, he likes to relax alternating between his 3 favoured activity which is writing, cooking, and travelling."
];

const OurTeam = () => (
  <div className="OurTeam">
    <Header image={ourTeamBanner} title="Our team"/>
    <TeamIntro />
    <PhotoArticle name="Xavier Christopher Clive" job="The CEO" text={firstPerson} photo={person1} textFirst />
    <PhotoArticle name="Susan King" job="Chief Financial Officer" text={secondPerson} photo={person2} />
    <PhotoArticle name="John Bratton" job="The CTO" text={firstPerson} photo={person3} textFirst />
    <PhotoArticle name="Mary Flynn" job="Chief Financial Officer" text={secondPerson} photo={person4} />
  </div>
);

export default OurTeam;
