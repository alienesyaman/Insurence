
import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap';
import Crypto from '../screens/img/product-insurance.png'
import Insurance from '../screens/img/Insurance.png'
import auto from '../screens/img/banner-auto-insurance.jpg'
import '../screens/Signup.css'
import { Navigate } from "react-router-dom";






const Home = () => {





const [goToPrice, setGoToPrice] = React.useState(false);
if (goToPrice) {
  return <Navigate to="/Projects" />;
}









  return (
    <div>




<Carousel  >
      <Carousel.Item>
        <Card > 
          <Card.Img height="700px"  variant="top" src="https://6rt99wqv.media.zestyio.com/insurance-basic-header.svg" />
          <Card.Body >
            <Card.Title></Card.Title>
            <Card.Text>
            Protect Your Future with Comprehensive Insurance Services
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Img  height="600px" variant="top" src="https://www.contactcars.com/assets/images/insurance/easy-insurance.svg" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
          Whether you're a seasoned driver or a first-time car owner, accidents can happen at any time.             </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Img height="700px" variant="top" src="https://www.inovexpat.com/wp-content/uploads/2021/02/green-card-and-car-insurance.jpg" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            Your health is your greatest asset, and taking care of it should be a top priority.            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>








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








        <div className="row" >

      <div className="col-sm-2 mb-2" >
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2021060310485237562.png" />
          <Card.Body>
            <Card.Title>Health Insurance</Card.Title>
            <Card.Text>
           
            </Card.Text>
            <Button variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit" >Learn More</Button>
          </Card.Body>
        </Card>
      </div>



      <div className="col-sm-2 mb-2">
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092615445316369.png" />
          <Card.Body>
            <Card.Title>Car Insurance</Card.Title>
            <Card.Text>
           
            </Card.Text>
            <Button variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit">Learn More</Button>
          </Card.Body>
        </Card>
      </div>



      <div className="col-sm-2 mb-2" >
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092616312716396.png" />
          <Card.Body>
            <Card.Title>Life Insurance</Card.Title>
            <Card.Text>
            
            </Card.Text>
            <Button variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit">Learn More</Button>
          </Card.Body>
        </Card>
      </div>




      <div className="col-sm-2 mb-2">
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092615460516370.png" />
          <Card.Body>
            <Card.Title>Traffic Insurance</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit">Learn More</Button>
          </Card.Body>
        </Card>
      </div>



      <div className="col-sm-2 mb-2">
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092616255416386.png" />
          <Card.Body>
            <Card.Title>Cars Insurance</Card.Title>
            <Card.Text>
            
            </Card.Text>
            <Button variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit">Learn More</Button>
          </Card.Body>
        </Card>
      </div>





      <div className="col-sm-2 mb-2">
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092616334116378.png" />
          <Card.Body>
            <Card.Title>Business Insurance</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Button variant="primary" onClick={() => {
          setGoToPrice(true);
        }}
     type="submit">Learn More</Button>
          </Card.Body>
        </Card>
      </div>

    </div>

















    <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Health Insurance</h2>
                    <p> Your health is your greatest asset, and taking care of it should be a top priority. Our health insurance plans offer comprehensive coverage for medical expenses, including hospital stays, surgeries, and prescription medications. </p>
                    <div className='input-container'>
                       
                        <button  className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
            </div>




<div className='signup2'>
<div className='container2'>
    {/* left */}
    <div className='left2'>
        <img src={Insurance} alt='' />
    </div>

    {/* right */}
    <div className='right2'>
        <h2 className='title2'>Life Insurance</h2>
        <p>Planning for the future is essential, especially when it comes to protecting your loved ones in the event of an untimely loss. Our life insurance policies provide financial security to your family, ensuring that they are taken care of when you're no longer around. </p>
        <div className='input-container2'>
           
            <button  className='btn btn2'>Learn More</button>
        </div>
    </div>
</div>
</div>











<div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={auto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Auto Insurance</h2>
                    <p>Whether you're a seasoned driver or a first-time car owner, accidents can happen at any time. Our auto insurance policies provide comprehensive coverage for your vehicle, protecting you against collisions, theft, and damage.</p>
                    <div className='input-container'>
                       
                        <button  className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
            </div>











    </div>
  )
}

export default Home