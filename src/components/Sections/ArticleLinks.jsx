import React from 'react';
import {articleData} from '../../data/ArticleUrls';
import ArticleCard from './../article-card';
import {v4 as uuidv4} from 'uuid';
export default function ArticleLinks(){
  
  function createArticleCard(arc){
    return <ArticleCard 
       key={uuidv4()}
      img= {arc.img}
      article= {arc.article}
    />
  }
  return <div className="article-div">
  <h1>Curious to know more about it?</h1>
  <div className="example-div">
    {articleData.map(createArticleCard)}
  </div>
</div>
}