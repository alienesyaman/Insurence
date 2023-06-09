import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "../App.css"

function CardComponent() {
  return (
    <div className="row"  >
      <div className="col-sm-3 mb-2" >
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2021060310485237562.png" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis euismod, vestibulum nisl sed, bibendum arcu.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-sm-3 mb-2">
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092615445316369.png" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Mauris vel magna ullamcorper,  eros vitae, Vestibulum posuere nulla sed lorem semper, sed luctus lorem congue.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-sm-3 mb-2" >
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092616312716396.png" />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Suspendisse auctor      adadadasda sapien eleifend. Sed consequat mauris eget risus tincidunt, a aliquet elit suscipit.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>


      <div className="col-sm-3 mb-2">
        <Card>
          <Card.Img variant="top" src="https://www.aksigorta.com.tr/api/uploads/2018092615460516370.png" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis euismod, vestibulum nisl sed, bibendum arcu.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>










    </div>
  );
}

export default CardComponent;