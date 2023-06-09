import React, { useState } from 'react'
import Chatbot from './Chatbot';
import "./Ternary.css"
import bott from "./bott.avif"



const Ternary = ( ) => {


   

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className='stickybtn'>



  <button style={{position:"fixed", bottom:"50px", right:"50px", borderRadius:"80px",height:"100px",width:"100px", }}  onClick={handleClick} class=" btn-outline-success "> <img src={bott} style={{position:"fixed", bottom:"50px", right:"50px", borderRadius:"30px",height:"110px",width:"100px",}} alt='' ></img> Toggle State</button>
  
  

      {toggle ?
    <Chatbot></Chatbot>
        :
        <></>
      }
    </div>
  )
}

export default Ternary