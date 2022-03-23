import React from 'react';
import './Article.css';

const Article = (props) => (
  <div className="Article" style={props.section ? {padding: '100px 0'} : null}>
    <div className="article__title">{props.title}</div>
    <div className="article__text">
      {props.text.map(paragraph => <p className={`article__text-paragraph ${props.withHeader ? "article__text-paragraph-withHeader" : ""}`}>{paragraph}</p>)}
    </div>
  </div>
);

export default Article;
