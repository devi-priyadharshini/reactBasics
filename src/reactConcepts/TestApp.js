import React from "react";
import boxes from "../data/boxes";
import Box from "./Box";

export default function TestApp() {
  const [state, setState] = React.useState(boxes);

  function toggle(id) {
    setState((prevState) => {
      return prevState.map((b) => (b.id === id ? { ...b, on: !b.on } : b));
    });
  }

  return (
    <div>
      {state.map((box) => (
        <Box on={box.on} onClick={() => toggle(box.id)}></Box>
      ))}
    </div>
  );
}
