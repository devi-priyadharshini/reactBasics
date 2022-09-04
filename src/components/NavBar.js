import React from "react";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <div className="app--navbar">
      <img className="app--image" src="./images/logo.png"></img>
      <p className="app--title">my travel journal</p>
    </div>
  );
}
