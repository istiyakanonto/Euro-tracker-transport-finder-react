import React, {} from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'
const RiderCart = (props) => {
    const {name,id,location,cost,photo}=props.cart||{}
    return (
        <div  className=' col-sm-12 col-md-6 col-lg-3 mt-5 container'>
           
           <Link to={`/destination/${id}`}> 
 <Card style={{ width: '15rem',height: '15rem',padding:'10px',marginTop:'100px',marginBottom:'50px',textAlign:'center'}}>
  
   <Card.Img style={{height:'170px'}} variant="top" src={photo} />
   <Card.Body>
      <Card.Title style={{ color: 'brown', fontWeight: '900', fontSize: '25px' }}>{name}</Card.Title>
      <Card.Text style={{ color: 'black', fontWeight: '600' }}>
        </Card.Text>
    </Card.Body>
 </Card>
 </Link>
        </div>
    );
};

export default RiderCart;