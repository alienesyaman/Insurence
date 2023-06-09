import React from 'react';
import ChatBot from 'react-simple-chatbot';
import "./Chatbot.css";
import { Navigate } from "react-router-dom";
import {  Button } from 'react-bootstrap';



function Chatbot() {
    
const [goToPrice, setGoToPrice] = React.useState(false);
if (goToPrice) {
  return <Navigate to="/Projects"/>;
}

   

    
    
  
    const [goToContact, setGoToContact1] = React.useState(false);
    if (goToContact) {
      return <Navigate to="/contact"/>;
    }
    



    const [goToAbout, setGoToAbout] = React.useState(false);
    if (goToAbout) {
      return <Navigate to="/about"/>;
    }
    





  return (
    <div className='chatbox'>
      
      <ChatBot



  steps={[
    {
      id: '1',
      message: 'What do you want to do ?',
      trigger: '2',
    },


    {
        id: '2',
        options: [
          { value: '1', label: 'Services', trigger: '3' },
          { value: '2', label: 'Blog', trigger: '4' },
          { value: '3', label: 'About', trigger: '5' },
         
        ],
       
      },


    {
      id: '3',
      component: (
        <Button 
        variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit" >
      Services
      </Button>
      ),

      end: true,
    },





    {
        id: '4',
        component: (
         <Button 
         variant="primary" onClick={() => {
            setGoToContact1(true);
        }}
     type="submit">
          Blog
         </Button>
        ),
  
        end: true,
      },




 {
        id: '5',
        component: (
         <Button 
         variant="primary" onClick={() => {
            setGoToAbout(true);
        }}
     type="submit">
          About
         </Button>
        ),
  
        end: true,
      },

  ]}


  
/>
    </div>
  );
}

export default Chatbot;
