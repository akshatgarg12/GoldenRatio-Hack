import React from 'react';

export default function ArticleCard(props){
  return <div className="article-card">
      <a href={props.article}>
      <img src={props.img}></img>
      </a>
    </div>
}