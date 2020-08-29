import React,{useState} from 'react';
import {Chat} from '../data/Chatbox';
import {v4 as uuidv4} from 'uuid';

export default function MobileChat(){
  const [question, setQuestion]= useState("Tell me something!");
  const [answer, setAnswer] = useState("What do wanna know?");


  function createButtons(chat){
    return <button key={uuidv4()} onClick={()=>{
      clickHandler(chat.question);
    }} className="btn">{chat.question}</button> 
  }
  function clickHandler(ques){
    setQuestion(ques);
    const req = Chat.find(c => c.question === ques);
    if(ques!=="Tell a random fact about it!"){
      setAnswer(req.answer);
    }
    else{
      let randomVar = Math.floor(Math.random()*4);
      setAnswer(req.answer[randomVar]);
    }
  }
 
  return <div>
     <h4 className="mobile-heading">Ask Something from our <span>GOLDEN</span>BOT.</h4>
  <div className="example-div fact-bot">
  <div className="btn-div">
      {Chat.map(createButtons)}
  </div>
  <div className="mobile">
    <nav>Golden Chat</nav>
    <h4 className="user-message">{question}</h4>
    <h4 className="robot-message">{answer}</h4>
  </div>  
  </div>
  </div>
  
}