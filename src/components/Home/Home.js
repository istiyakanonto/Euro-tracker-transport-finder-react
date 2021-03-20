
import Header from '../Header/Header';
import './Home.css'
import { Button, Card } from 'react-bootstrap'
import data from '../../Fakedata/data.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const first4 = data.slice(0, 4)
   const [rides,setRides]=useState(first4)
     return (
        <div className='container'>
            <div>
           
            </div>
              
              <div className=' row'>
           
{
   rides.map (ride=>
   <div className=' col-sm-12 col-md-6 col-lg-3 mt-5'>
       <Link to={`/destination/${ride.id}`}> 
<Card style={{ width: '15rem',height: '15rem',padding:'10px',marginTop:'100px',marginBottom:'50px',textAlign:'center'}}>
  
   <Card.Img style={{height:'170px'}} variant="top" src={ride.photo} />
   <Card.Body>
       <Card.Title style={{ color: 'brown', fontWeight: '900', fontSize: '25px' }}>{ride.name}</Card.Title>
       <Card.Text style={{ color: 'black', fontWeight: '600' }}>
       </Card.Text>
   </Card.Body>
</Card>
</Link>
 </div>)
}
 </div>
              </div>
);
};

export default Home;