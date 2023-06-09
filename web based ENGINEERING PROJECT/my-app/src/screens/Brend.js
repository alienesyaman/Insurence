
import React, { Component } from 'react'
import App from '../App.css';


export default class Brend extends Component {

  render() {
    return (
      <div>
        <section className="section-featured">
            <div classNames="container">
                <h2 className="heading-featured-in">As featured in</h2>
                <div className="logos">
                    <img src="https://e7.pngegg.com/pngimages/738/808/png-clipart-mercury-insurance-group-flor-associates-insurance-agency-insurance-agent-vehicle-insurance-mercury-miscellaneous-text-thumbnail.png" alt="Techcrunch logo" />
                    <img src="https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text-thumbnail.png"  alt="The New York Times logo"/>
                    <img src="https://e7.pngegg.com/pngimages/7/390/png-clipart-liberty-mutual-insurance-logo-brand-deductible-libert-eacute-text-logo.png" alt="The New York Times logo" />
                    <img src="https://e7.pngegg.com/pngimages/250/170/png-clipart-axa-health-insurance-company-liberty-mutual-others-blue-company-thumbnail.png" alt="Forbes logo" />
                    <img src="https://e7.pngegg.com/pngimages/713/661/png-clipart-health-insurance-liberty-mutual-logo-life-insurance-business-company-text-thumbnail.png" alt="USA Today logo" />
                </div>
            </div>
        </section>
      </div>
    )
  }
}
