import React from 'react';
import Article from '../Article/Article';
import './PhotoArticle.css';
import pcIcon from '../../assets/icons/pc_icon.png';


const PhotoArticle = (props) => (
  <div className="PhotoArticle" style={props.dark ? { background: "#F3F0E9" } : null}>
      <div className={`photoArticle__picture ${props.textFirst ? "text-first" : ""}`}>
        <img src={props.photo} />
      </div>
      
        <Article withHeader = {props.withHeader} title={props.title} name={props.name} job={props.job} text={props.text}/>
  </div>
);

export default PhotoArticle;
