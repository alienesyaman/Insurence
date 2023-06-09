import React from 'react';
import { Carousel, Card } from 'react-bootstrap';


function CardSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Card>
          <Card.Img height="600px"   variant="top" src="https://6rt99wqv.media.zestyio.com/insurance-basic-header.svg" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis euismod, vestibulum nisl sed, bibendum arcu.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Img  height="600px" variant="top" src="https://www.contactcars.com/assets/images/insurance/easy-insurance.svg" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Mauris vel magna ullamcorper, interdum eros vitae, mattis ante. Vestibulum posuere nulla sed lorem semper, sed luctus lorem congue.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Img height="600px" variant="top" src="https://www.inovexpat.com/wp-content/uploads/2021/02/green-card-and-car-insurance.jpg" />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Suspendisse auctor orci vel mauris euismod, sit amet dapibus sapien eleifend. Sed consequat mauris eget risus tincidunt, a aliquet elit suscipit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default CardSlider;