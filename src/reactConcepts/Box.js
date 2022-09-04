import React from "react";

export default function Box(props) {
  console.log("Box Render");

  console.log(props.onClick);
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        display: "inline-block",
        margin: "35px",
        backgroundColor: props.on ? "#222222" : "white",
      }}
      onClick={props.onClick}
    ></div>
  );
}
