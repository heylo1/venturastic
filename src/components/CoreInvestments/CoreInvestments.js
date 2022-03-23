import React from 'react';
import PropTypes from 'prop-types';
import './CoreInvestments.css';
import firstS from '../../assets/firstS.png';
import secondS from '../../assets/secondS.png';
import Article from '../Article/Article';

const article1 = [
  "Our investment analysts will conduct diverse face-to-face meetings with companies, visiting factories, facilities and headquarters, as this helps drive deep operational understanding, and this way they do more than, just make recommendations.",
  "Our deep and fundamental research is the backbone and is central to the results we will deliver to our investing community."
];
const article2 = [
  "We value openness, communicating both internally and with the companies we work with, this open-architecture culture extends to our relationship with our advisors and partners too. ",
  "Technology and innovation are shaping the future, whether influencing products, process and experiences. While supporting this extraordinary transformation, we remain sustainable at heart. ",
  "We do love all things Fashion, Media and Technology, and we also love brands that want to embrace change and evolution."
];
const article3 = [
  "We will construct portfolios with a meticulous attention to detail, developing deep understanding, and carefully selecting the investment that we believe will best serve our expertise and experience. We believe good investment are built on close partnerships, strong alignment and deep personal relationships.",
  "Our research is more than just numbers. We don't stop at just spreadsheets and site visits, but we get to know the people who make the company work.",
  "Boots on the ground - We believe that the best way to get to know a company is to know the people behind the business, hence we want to know both senior management and the employees on the ground."
];

const CoreInvestments = () => (
  <div className="CoreInvestments">
    <div className='coreInvestments__tilte'>Core Investment Themes</div>

    <div className='coreInvestments__header'>
      <div className='coreInvestments__header-image'><img src={firstS} /></div>
      <div className='coreInvestments__header-text'>Companies where we have the ability to improve performance</div>
      <div className='coreInvestments__header-text'>Leverage successful business models and innovation abroad</div>
      <div className='coreInvestments__header-text'>Help brands expand in Asia, Mena and Latin America to meet the needs of an emerging middle class with increased purchasing power</div>
      <div className='coreInvestments__header-image'><img src={secondS} /></div>
    </div>
    
    <div className='coreInvestments__articles'>
      <div>
        <Article title='Research-driven investment Methodology' text={article1}/>
        <div className='coreInvestments__articles-second'>
          <Article title='Culture of Collaboration' text={article2}/>
        </div>
      </div>
      <div>
        <Article title='Breakroom to boardroom we get to know them ' text={article3}/>
      </div>
    </div>
  </div>
);

CoreInvestments.propTypes = {};

CoreInvestments.defaultProps = {};

export default CoreInvestments;
