import React from "react";
import { isMobile } from 'mobile-device-detect';
function Services() {
  return (
    <div
      style={{ display: "flex", flex: 1, flexDirection: isMobile? "column": "row", paddingTop: 40 }}
    >
      <div style={{ flex: 0.5 }}>
        <h2
          style={{
            backgroundColor: "rgb(98,161,217)",
            color: "white",
            padding: 10,
            marginBottom:50
          }}
        >
          Our Services
        </h2>
        <ul>
          <li>Transport Air- Conditioning</li>
          <li>Low Temperature Applications</li>
          <li>Mechanical Ventilation.</li>
          <li>Humidification works</li>
          <li>Air Washers</li>
          <li>
            Precision Air-Conditioning Systems for Closed Control Applications
          </li>
          <li>
            Providing service to other Branded Air conditioning and
            Refrigeration Products.
          </li>
          <li>Fire Protection Systems</li>
          <li>Fire Fighting Systems</li>
        </ul>
      </div>
      <div style = {{flex:0.5,padding:50}}>
          <img src={require("../Images/services.jpg")}/>
     </div>
    </div>
  );
}

export default Services;
