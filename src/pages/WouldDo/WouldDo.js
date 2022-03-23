import React from 'react';
import { Header, Article, PhotoArticle, Tenets, CoreInvestments } from '../../components';
import './WouldDo.css';
import wouldDoBanner from '../../assets/wouldDoBanner.png';
import groupOfPeople from '../../assets/groupOfPeople.png';
import virtualMap from '../../assets/virtualMap.png';
import boxes from '../../assets/boxes.png';
import cityInvestment from '../../assets/cityInvestment.png';

const article1 = [
  "We will identify, conceive and build business that will create substantial long-term value for our investing community: creating business combinations in an Industry that will complement the experience and expertise of our management team, Board of Directors, Advisors and external operating partners.",
  "We would also be willing to accept a high degree of capital structure, legal and situational complexity in a business combination, if we believe that it has the potential for a reward that would justifies such additional complexities, especially if such issues can be resolved in connection with and as a result of a combination of expertise inhouse."
];

const article2 = [
  "We understand what makes an investment successful, both financially and strategically, our internal practices and techniques garner strong results.",
  "We journey through the entire lifecycle and you leverage your own investment decisions based on our well-informed diligence and deep sector understanding.",
  "Under our model of SPIV offering, we will create and manage a multiple that would acquire majority stakes in luxury/Premium Fashion brands, with a view of consolidation. As Industry professional and investors, we will vet investment opportunities for our investor community, whilst managing these investments. "
];

const photoArticle1 = [
  "We create our own private networked Special Purpose Investment Vehicles (SPIV) structure for the projects, we launch, which will enable us to be truthful to the vision and project created.",
  "We do not put a charge on the investment management, nor do we burden the project with high underwriting fees and other fund managers costs. We bring the project directly to the investors, through a network of partners and broking firms.",
  "We will build value by growing the company and expanding it to a form, that will intricately increase its valuation, thereby realizing better ROI upon the first IPO listing. All the projects will undergo dual listing at major stock exchanges."
];

const photoArticle2 = [
  "We at Venturastic are dedicated to investing in very focussed verticals. Seeking to drive economic growth and making a positive impact.",
  "We will do this by bringing together and creating a new breed of borderless angel Investors.",
  "When industries changes, we change too. With technologies evolving, we evolve with it. And because we are all entrepreneurs, founders and Investors ourselves who have grown from start-up and SME. We want to make a change in the way investments are done, breaking down barriers and borders, allowing a new wave of Angel Investing."
];

const photoArticle3 = [
  "Our Industry relationships and leadership allow us to diligently apply the lens of our highly focused strategy to ensure we only spend time on the most promising investments, allowing us to focus and leave no stone unturned.",
  "More than the investment, we pride ourselves on our Business process re-engineering experience to cross reference and benchmark investment opportunities in a way, we believe, few in our Industry can.",
  "We study the competitors, suppliers, customers, and within our specialist network to create a holistic perspective that allows us to eventually invest in only those that we consider the best opportunities."
];



const photoArticle4 = [
  "Many of our LPs (Limited Partnership) & their affiliates will take the opportunity of co-investing, offering greater access to strategic capital. This will also allow our investing community to access high-quality investment opportunities fast, maximizing returns with capital being deployed in historical and mature luxury brands. Our aim is to help realize rare potential and to do this well. We believe it’s essential to be a trusted partner to companies at every stage — from restructuring to IPO."
];


const WouldDo = () => (
  <div className="WouldDo">
    <Header image={wouldDoBanner} title="What would we do" description=""/>
    <Article title="Creating business that will engage in disruptive thinking, reimagining ways to build profitable enterprise." text={article1} section/>
    <PhotoArticle title="SPIV the Venturastic way" text={photoArticle1} photo={groupOfPeople} dark withHeader />
    <PhotoArticle title="Borderless Investing Community with focused vertical. " text={photoArticle1} photo={virtualMap} textFirst withHeader />
    <PhotoArticle title="Restructuring Methodology" text={photoArticle1} photo={boxes} dark withHeader />
    <Tenets />
    <CoreInvestments />
    <Article title="Special Purpose Investment Vehicle (SPIV) Model" text={article2} section />
    <PhotoArticle title="We welcome co-investment" text={photoArticle4} photo={cityInvestment} dark />
  </div>
);

export default WouldDo;
