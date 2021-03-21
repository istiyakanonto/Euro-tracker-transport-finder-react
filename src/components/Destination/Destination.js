import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../Fakedata/data.json";
import "./Destination.css";
import GoogleMap from "../GoogleMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const Destination = () => {
  const { id } = useParams();
  const selectVehicle = data.find((vehicle) => vehicle.id == id);
  const [transport, setTransport] = useState([]);
  useEffect(() => {
    setTransport(selectVehicle);
  }, []);

  const {  photo,  cost,seat } = transport;

  return (
    <div className=" container destination-style">
      <div className="row">
      <div className=" col-sm-12  col-lg-3 mt-5 card-style">
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
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDgQhiQQiEoErSzGvSwznqMMix_jHydXr8",
// })(Destination);

export default Destination;
