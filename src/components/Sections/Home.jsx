import React from 'react';
import TextLoop from "react-text-loop";
export default function HomeSection(){
  
  return  <section id="home">
  <TextLoop mask={true} adjustingSpeed={1}>
   <h1><span>Golden</span> Ratio</h1>
   <h1><span>Golden</span> Mean</h1>
   <h1><span>Golden</span> Number</h1>
   <h1><span>Divine</span> Proportion</h1>
   <h1><span>Divine</span> Section</h1>
   <h1>ϕ = <span>1.61803</span></h1>
  </TextLoop>
  
</section>
}