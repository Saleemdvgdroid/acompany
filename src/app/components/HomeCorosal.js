import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import About from "./About";

export default class DemoCarousel extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: 50, paddingRight: 50, width: "100%",paddingTop:'6%' }}>
        <Carousel
          autoPlay={true}
          transitionTime={2200}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <img
              width={"90%"}
              height={690}
              src={require("../Images/bg_1.png")}
            />
          </div>

          <div>
               
          </div>

          <div>
            <img
              width={"90%"}
              height={690}
              src={require("../Images/3.png")}
            />
            <div
              style={{
                position: "absolute",
                bottom: 50,
                left: 20,
                padding: 20,
                backgroundColor: "rgba(240,120,80,0.5)",
                width: 200,
                height: 250
              }}
            >
            </div>
          </div>
          <div>
            <img
              width={"90%"}
              height={690}
              src={require("../Images/4.png")}
            />
          </div>
          
        </Carousel>
      </div>
    );
  }
}
