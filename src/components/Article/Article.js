import React from 'react';
import './Article.css';

const Article = (props) => (
  <div className={`Article ${props.section ? "section" : ""}`} >
    {props.title ? <div className="article__title">{props.title}</div> : <div><p className="article__name">{props.name}</p><p>{props.job}</p></div>}
    <div className="article__text">
      {props.text.map(paragraph => <p className={`article__text-paragraph ${props.withHeader ? "article__text-paragraph-withHeader" : ""}`}>{paragraph}</p>)}
    </div>
  </div>
);

export default Article;
