import React from 'react';

export default function AboutSection(){
  return <div className="about-div">
  <h1>What is the <span>Golden Ratio</span>?</h1>
    <p className="about-div-txt">The golden ratio, also known as the divine proportion, golden mean, or golden section, is a number often encountered when taking the ratios of distances in simple geometric figures such as the pentagon, pentagram, decagon and dodecahedron. It is denoted phi, or sometimes tau. This was first described by the Greek mathematician Euclid, though he called it "the division in extreme and mean ratio,"</p>
    <div className="about-div-derivation">
      <p>
      Given a rectangle having sides in the ratio 1:x, phi is defined as the unique number x such that partitioning the original rectangle into a square and new rectangle as illustrated above results in a new rectangle which also has sides in the ratio 1:x (i.e., such that the yellow rectangles shown above are similar). Such a rectangle is called a golden rectangle, and successive points dividing a golden rectangle into squares lie on a logarithmic spiral, giving a figure known as a whirling square.
      </p>
      <img alt="derivation-img" src="derivation.png"></img>
      </div>
      <div className="about-div-derivation">
      <img alt="derivation2.png" src="derivation2.png"></img>
      <div>
      <p> phi/1=1/(phi-1)</p>
      <p> phi^2-phi-1=0. </p>
      <p>phi	=	1/2(1+sqrt(5))	
=	<span>1.618033988749894848204586834365638117720...</span></p>
<a href="https://www.youtube.com/watch?v=5zosU6XTgSY#action=share">video explaination</a>
      </div>
      <img alt="derivation2.png" src="https://static-cse.canva.com/blob/136813/14.3e96bdb3.png"></img>
      </div>
  </div>
}