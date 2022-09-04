import React from "react";
import "../css/travelCard.css";

export default function TravelCard(props) {
  return (
    <div>
      <div className="travel--card">
        <img className="travel--image" src={props.image}></img>
        <div className="travel--details">
          <div className="travel--location">
            <img className="travel--pin" src="./images/locationPin.png"></img>
            <span className="travel--site">{props.location.toUpperCase()}</span>
            <a className="travel--link" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h2 className="travel--title">{props.title}</h2>
          <div className="travel-date">
            {props.startDate} - {props.endDate}
          </div>
          <p className="travel--desc">{props.description}</p>
        </div>
      </div>
      <hr className="line"></hr>
    </div>
  );
}
