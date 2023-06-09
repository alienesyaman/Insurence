import React from "react";
import "./Footer.css";

function Footer() {
  return (
    
    <div className="main-footer">
      <div className="container">
        <div className="row">
        

          <div className="col">
            <h5>THICC MEMES INC</h5>
            <h6 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Istanbul, Turkey</li>
             
            </h6>
          </div>
        

          <div className="col">
            <h5>Social media</h5>
            <ui className="list-unstyled">
              <li> Twitter</li>
              <li> Instagram</li>
              <li> Youtube</li>
            </ui>
          </div>
         

          <div className="col">
            <h5>Navigate</h5>
            <ui className="list-unstyled">
              <li>Service </li>
              <li> About</li>
              <li> Blog</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Ali Enes Yaman | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
