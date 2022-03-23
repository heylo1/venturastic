import React from 'react';
import { Article, Header, PhotoArticle } from '../../components';
import './Corporate.css';

import corporateBanner from '../../assets/corporateBanner.png';
import phillars from '../../assets/phillars.png';
import moneyClocks from '../../assets/moneyClocks.png';
import audit from '../../assets/audit.png';
import ethics from '../../assets/ethics.png';

const article1 = [
  "Corporate governance will be practiced at all business units within the group, our processes are regularly reviewed to ensure that they continue to reflect local as well as international developments, making us always at the forefront of best practices and the highest ethical standards."
];

const photoArticle1 = [
  "Venturastic is always committed to high standards of corporate behaviour towards its employees, its customers, governments and the community at large, in which we operate.",
  "The purpose of our Code of Ethics is to ensure that our Board of Directors, Executive Advisors and employees across the group have a very clear understanding of principles that are important in conducting our business.",
  "These fundamentals and values are important in maintaining and building the prestige of Venturastic as a responsible and trustworthy business partner, employer, and corporate citizen."
];
const photoArticle2 = [
  "Venturastic board, will appoint internal advisors and also establish an independent external Finance and Investment Committee to evaluate and recommend potential investments, divestments, mergers and acquisitions, restructuring, spin-offs, joint-ventures, partnerships, corporate actions (e.g.,stock dividends, etc.), capital raisings (e.g., public offerings, bond issuance, bank borrowings, etc.), asset revaluation, capital management and other corporate finance activities for the Group. This committee will also oversee existing investments and monitor the management of such for meeting performance targets."
];
const photoArticle3 = [
  "The Audit and Risk Management Committee’s primary function is to assist the Venturastic Board in fulfilling its oversight responsibilities. It will review the system of internal control and risk management, corporate governance process, the financial reporting process, the audit process, and the Group’s process for monitoring compliance with laws and regulations and its Code of Ethics.",
  "In performing its duties, the Audit and Risk Management Committee will maintain effective working relationships with the Venturastic Board, Business Units and Management, and the internal and external auditors."
];
const photoArticle4 = [
  "Ethics Committee is established to assist Venturastic Board in fulfilling its responsibilities relating to (a) the compliance with all legal requirements to which it is subject, including all regulations and laws applicable (b) the design, implementation and execution of the Compliance and Ethics Program and (c) matters relating to Code of Ethics. Ethics Committee assists the board in establishing an appropriate tone at the top and also promoting a strong culture of compliance."
];

const Corporate = () => (
  <div className="Corporate">
    <Header title='Corporate governance' image={corporateBanner} />
    <Article title='Venturastic is aware about the importance of good corporate governance for business, this is especially for a company that aspires to compete in the global marketplace today.' text={article1} section/>
    <PhotoArticle title="Code of Ethics" text={photoArticle1} photo={phillars} dark withHeader />
    <PhotoArticle title="Finance and Investment Committee" text={photoArticle2} photo={moneyClocks} textFirst />
    <PhotoArticle title="Audit and Risk Committee" text={photoArticle3} photo={audit} />
    <PhotoArticle title="Ethics Committee" text={photoArticle4} photo={ethics} textFirst />

  </div>
);

export default Corporate;
