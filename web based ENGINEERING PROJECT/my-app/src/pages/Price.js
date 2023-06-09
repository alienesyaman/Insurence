import React from 'react'
import Table from 'react-bootstrap/Table';
import "./Price.css"
import { Navigate } from "react-router-dom";

function Price() {
   


  const [goToPrice, setGoToPrice] = React.useState(false);
  if (goToPrice) {
    return <Navigate to="/Pay" />;

  }






  return (
    <Table striped bordered hover className='table2'>
      <thead>
        <tr>
          <th>#</th>
          <th>Services</th>
          <th>Brend</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>


      <tbody>
        <tr>
          <td>1</td>
          <td>Health Insurance</td>
          <td>AXA</td>
          <td>900$</td>
          <td><button className='btn'  onClick={() => {
          setGoToPrice(true);
        }}
     type="submit" >Pay</button></td>
        </tr>


        <tr>
          <td>2</td>
          <td>Health Insurance</td>
          <td>Mercury Insurance</td>
          <td>920$</td>
          <td><button className='btn'>Pay</button></td>
        </tr>


        <tr>
          <td>3</td>
          <td>Health Insurance</td>
          <td>Zurich</td>
          <td>960$</td>
          <td><button className='btn'>Pay</button></td>
        </tr>
      </tbody>

    </Table>
    
);

}

export default Price;
