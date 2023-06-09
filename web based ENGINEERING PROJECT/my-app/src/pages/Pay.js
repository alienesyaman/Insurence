import React, { Component } from 'react'
import "./Pay.css"

export default class Pay extends Component {
  render() {
    return (
   
<form className="form">
    <p className="title">Pay using credid card </p>
       
            
    <label>
        <input required="" placeholder="" type="email" className="input"/>
        <span>Name</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Card Number</span>
    </label>
  
    <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>CVV</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Date</span>
        </label>

    </div>  

    <button className="submit">Pay</button>
    
</form>
       
     
    )
  }
}
