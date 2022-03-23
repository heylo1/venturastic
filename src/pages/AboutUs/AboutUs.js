import React from 'react';
import { Article, Header, OurEthos, PhotoArticle } from '../../components';
import './AboutUs.css';

import aboutusBanner from '../../assets/aboutusBanner.png';
import aboutusGroup from '../../assets/aboutusGroup.png';
import rocks from '../../assets/rocks.png';

const article1 = [
  "Our investment philosophy leans heavily on value creation. At Venturastic we create success stories. We don’t just invest, we fully participate in them, and that is what will make us stand tall and apart from the rest."
];
const article2 = [
  "Experience – combined experience of over 150 years in Private equity, Media & Entertainment, Luxury, M&A, Restructuring and Technology with a disciplined, coherent business and investment strategy.",
  "Relationship Heritage – consolidated relationship with the ability to evaluate each investment opportunity from a long-term perspective.",
  "Sector Knowledge – Deep knowledge and expertise of the reference Industry sectors.",
  "Management Skills – Speed, Accuracy and Confidentiality in the implementation of projects, based on transactions assessed and completed.",
  "Tailored Deals – Flexibility in structuring the deal which is more responsive to the specific needs of our investing community."
];
const article3 = [
  "We have founded Venturastic on a simple belief, that the most valuable companies of our time will be the ones keeping at heart its people. We see profit and motive as a virtuous circle, and in the right combination they form a cogwheel that will deliver prodigious financial returns while reshaping capitalism in a positive way.",
  "More than the Investment, leverage comes from experience, expertise, and mentoring, and it takes some gusto to challenge the status quo, to invoke change.",
  "“The landscape has changed, so must the games and its rules”"
];
const article4 = [
  "As Industry and domain experts, operating at the intersection of Luxury, Media, and Technology, it enables and empowers us to offer strategic counsel, which maximizes the likelihood, that our projects will successfully capitalize on opportunities.",
  "By cross pollinating within these Industries, we help facilitate and foster the business partnerships and conversations that underlie Innovations, serving as a catalyst for the creation of future business opportunities on behalf of our Investing community."
];

const photoArticle1 = [
  "It will aim at developing itself as a strong global player, by building a proven track record and achieving significant milestones in the next 5 years.",
  "We will create and target business that have imperceptible potential for revenue growth, defensible intellectual property and strong market positions within their respective industries. Investing in large capitalization business with opportunities that will generate predictable cash flows and a compelling value proposition, we also want to contribute more to the economic growth in the countries where we expand our footprints while also promoting sustainable business practices, leveraging the power of many to deliver value to both mature and emerging business."
];

const AboutUs = () => (
  <div className="AboutUs">
    <Header title='About us' image={aboutusBanner} />
    <PhotoArticle title='Venturastic Fund’s is a Special Purpose Investment Holding Company (SPIC) formed with an impetus for creating, building business, & Merger and Acquisition.' text={photoArticle1} photo={aboutusGroup} />
    <img style={{width: '100%'}} src={rocks} />

    <div className='aboutus__articles'>
      <div>
        <Article title='Philosophy' text={article1}/>
        <div className='aboutus__articles-second'>
          <Article title='Our Strengths' text={article2}/>
        </div>
      </div>
      <div>
        <Article title='Our Belief' text={article3}/>
        <div className='aboutus__articles-second'>
          <Article title='Our Strategy' text={article4}/>
        </div>
      </div>
    </div>

    <OurEthos />

  </div>
);

export default AboutUs;
