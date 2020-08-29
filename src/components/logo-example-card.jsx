import React from 'react';

export default function LogoCards(props){
  return <div className="logo-example-div">
  <img  alt="upper-img" src={props.upperImg}></img>
  <img  alt="lower-img" src={props.lowerImg}></img>
</div>
}