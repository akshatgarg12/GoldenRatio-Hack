import React,{useState} from 'react';

export default function FacesSection(){
  const [clicked, onClick] = useState(false);
  function ClickHandler(){
    onClick(true);
  }
  return <div>
    <h1 className="example-heading">The Geometry of <span>Faces</span></h1>
        <div className="example-div face-example">
        <h4>Have you ever wondered how artists creates perfect faces?</h4>
         <img  src="face.png" alt="face-img"></img>
         <div>
         <p>Well, the artists uses this divine proportion to map out feautures of a face.</p>
         <br />
         <p>The human face abounds with examples of the Golden Ratio, also known as the Golden Section or Divine Proportion. </p>
         <br />
         <p>
           During the European Renaissance, renowned artists and architects used the "golden ratio" to map out their masterpieces.
         </p>
         </div>
        </div>
        <div className="example-div interactive-face-div">
          <h4>Beauty of a face can be measured using Golden ratio and other measurements!</h4>
          <button style={{"background":clicked ? "#fcbf49":"#f77f00"}}onClick={ClickHandler}>{clicked ? "Result shows you are beautiful 🌸" : "Click here to check if you are beautiful?"}</button>
        </div>
  </div>
}