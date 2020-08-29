import React, {useState} from 'react';

export default function ExampleCard(props){
  const [onHover, setOnHover] = useState(false);
  function onEnter(){
    console.log('enter');
    setOnHover(true);
  }
  function onLeave(){
    console.log('leave');
    setOnHover(false);
  }

  return <div className="example-card">
  <img alt="monument-img" src={onHover ?props.onClickImgSrc:props.primaryImgSrc} onMouseDown={onEnter} onMouseUp={onLeave}></img>
  <h6>{props.title}</h6>
  <p>
    {props.description}
  </p>
</div>
}