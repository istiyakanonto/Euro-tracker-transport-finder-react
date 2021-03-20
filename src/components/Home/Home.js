
import Header from '../Header/Header';
import './Home.css'
import { Button, Card } from 'react-bootstrap'
import cartData from '../../Fakedata/data.json'
 import { useEffect, useState } from 'react';
import RiderCart from '../RiderCart/RiderCart';


const Home = () => {
    const [carts,setCarts]=useState([])
    useEffect(()=>{
setCarts(cartData)
    },[])
    return (
        <div className="container">
             <div className="row">
            {
carts.map(cart=><RiderCart cart={cart}></RiderCart>)
            }
           
        </div>
        </div>
       
    );
    
}

export default Home;