import React from 'react';
import {LogoData} from '../../data/LogoImageUrls';
import LogoCards from '../logo-example-card';
import { v4 as uuidv4 } from 'uuid';

export default function LogoSection(){
  function createLogoCards(logo){
    return <LogoCards 
      key={uuidv4()}
      upperImg = {logo.upperImg}
      lowerImg = {logo.lowerImg}
    />
  }
  return <div>
      <h1 className="example-heading">Ever Wondered Why the <span>Logos</span> of some brands Stand-out?</h1>
        <div  className="example-div">
        {LogoData.map(createLogoCards)}
        </div>
        <h4 className="logo-text">The logos of some company look very simple yet really attractive. Alot of these companies use "Golden ratio" principles to create their logos.Designers create the basic layout using this ratio which imparts symmetry to the logo. Often these logos has some hidden message behind them, wrapped by the Designers illustrations.</h4>
  </div>
}