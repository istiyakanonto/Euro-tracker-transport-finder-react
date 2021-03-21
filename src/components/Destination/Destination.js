

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../Fakedata/data.json";
import "./Destination.css";
import GoogleMap from "../GoogleMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faBiking } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Destination = () => {
    const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  const selectVehicle = data.find((vehicle) => vehicle.id == id);
  const [transport, setTransport] = useState([]);

  useEffect(() => {
    setTransport("");
  }, []);

const watchResult=()=>{
    let val=transport;
    val ==="" ? setTransport(selectVehicle):setTransport("")
}
  const {  photo,  cost,seat,locationFrm,locationTo} = transport;

  return (
    <div className=" container destination-style">
        <div className=" col-sm-12  col-lg-3 mt-5 card-style">
       <div style={{ boxShadow: '0 4px 8px 0 #8068EA',paddingLeft:'30px'}} >
            <p style={{color:'#8000FF', fontWeight: "600"}}>Pick From</p>
      {<input  style={{marginBottom:'10px'}} type="text"placeholder="Pick From"/>}
      <p  style={{color:'white', fontWeight: "600"}}>Pick To</p>
    <input style={{marginBottom:'10px'}} type="text"  placeholder="Pick To" required/>
     
     <p  style={{color:'white', fontWeight: "600"}}>Select Date</p>
     <DatePicker  selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd-MM-yyyy" minDate={new Date()} isClearable
     />
    <br/>

    <button onClick={watchResult} style={{marginTop:'20px',height:'30px',width:'183px',backgroundColor:'brown',color:'white',marginBottom:'10px',borderRadius:'10px'}}>Search Ride</button>
     </div>
    
        </div>
        {/* card */}
      <div className="row">
      <div className=" col-sm-12  col-lg-3 mt-5 card-style">
      <h4 style={{color:"#7E67EA",textAlign:"center"}}>{locationFrm}  <FontAwesomeIcon icon={faBiking} /> {locationTo}</h4>
          <div className="div-style">
            
          <img src={photo} alt="" />
          <p style={{ color: "#8000ff", fontWeight: "600"}}>Seat Range: <FontAwesomeIcon icon={faUsers} /> {seat}</p>
          <p style={{ color: "#920024", fontWeight: "600" }}>
          Traveling Cost: {cost}$
          </p>
          </div>
         <div className="div-style">
         <img src={photo} alt="" />
         <p style={{ color: "#8000ff", fontWeight: "600"}}>Seat Range: <FontAwesomeIcon icon={faUsers} /> {seat}</p>
          <p style={{ color: "#920024", fontWeight: "600" }}>
            Traveling Cost: {cost}$
          </p>
         </div>
         <div className="div-style">
         <img src={photo} alt="" />
         <p style={{ color: "#8000ff", fontWeight: "600"}}>Seat Range: <FontAwesomeIcon icon={faUsers} /> {seat}</p>
          <p style={{ color: "#920024", fontWeight: "600"}}>
          Traveling Cost: {cost}$
          </p>
         </div>
          
         </div>
         <div className=" col-sm-12 col-lg-9 mt-5 map-style"> 
         <GoogleMap />
         </div>
        </div>
      </div>
    
  );
};


export default Destination;
