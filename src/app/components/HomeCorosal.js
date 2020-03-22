import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/HomeCorosal';
export default class DemoCarousel extends React.Component {
  state = {
    images: [require("../Images/img-one.jpg"),require("../Images/img-two.jpg"),require("../Images/img-three.jpg")]
  }
  renderItems = () => {
    let views = [];
    for(let i=0;i<3;i++){
      views.push(
        <div>
              <img
                width={"90%"}
             
                src={this.state.images[i]}
              />
          </div>
      )
    }
    return views;
  }

  render() {
    const {isShowIndicator = true,
        isSplash = false,
        isStopOnTouch = true,
        showArrows = true,
        currentOpacity = 1
    } = this.props;
    return (
      <div style={isSplash ?{...styles.in_splash, opacity:currentOpacity } : styles.in_screen }>
        <Carousel
          interval = {10000}
          autoPlay={true}
          transitionTime = {1200}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators = {isShowIndicator}
          stopOnHover = {isStopOnTouch}
          showArrows = {showArrows}
        >
          {this.renderItems()}
          
        </Carousel>
      </div>
    );
  }
}
