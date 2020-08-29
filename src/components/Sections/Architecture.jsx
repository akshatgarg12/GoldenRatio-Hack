import React from 'react';
import {architectureExamples} from '../../data/ArchitectureExamples';
import ExampleCard from '../example-card';
import { v4 as uuidv4 } from 'uuid';
export default function ArchitectureSection(){
  function createArchitectureCards(archi){
    return <ExampleCard
      key = {uuidv4()} 
      title={archi.title}
      description={archi.description}
      primaryImgSrc={archi.primaryImgSrc}
      onClickImgSrc={archi.onClickImgSrc}
    />
  }
  return <div>
     <h1 className="example-heading">The great <span>Architecture</span> of the World</h1>
     <p style={{"color":"#fff"}}>(Click on the image to see the implementation)</p>
        <div className="example-div">
          {architectureExamples.map(createArchitectureCards)}
        </div>
  </div> 
}