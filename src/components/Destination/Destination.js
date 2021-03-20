import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../Fakedata/data.json";
import "./Destination.css";

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const Destination = () => {
  const { id } = useParams();
  const selectVehicle = data.find((vehicle) => vehicle.id == id);
  const [transport, setTransport] = useState([]);
  useEffect(() => {
    setTransport(selectVehicle);
  }, []);

  const { name, photo, location, cost } = transport;

  return (
    <div>
      <div className="container card-style">
        <div>
          <img src={photo} alt="" />
          <p style={{ color: "brown", fontWeight: "600", marginLeft: "80px" }}>
            {cost}$
          </p>
        </div>

        <div>
          <img src={photo} alt="" />
          <p style={{ color: "brown", fontWeight: "600", marginLeft: "80px" }}>
            {cost}$
          </p>
        </div>

        <div>
          <img src={photo} alt="" />
          <p style={{ color: "brown", fontWeight: "600", marginLeft: "80px" }}>
            {cost}$
          </p>
        </div>
      </div>

      {/* <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map> */}
    </div>
  );
};
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDgQhiQQiEoErSzGvSwznqMMix_jHydXr8",
// })(Destination);

export default Destination;