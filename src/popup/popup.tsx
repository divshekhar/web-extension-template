import React from "react";
import "./popup.css";

import HelloWorldPNG from "../assets/images/hello-world.png";

export default function Popup() {
  return (
    <div className="popupContainer">
      <div className="helloWorldImg">
        <img src={HelloWorldPNG} alt="Hello World" />
        <h2>Hello World!</h2>
      </div>
    </div>
  );
}
