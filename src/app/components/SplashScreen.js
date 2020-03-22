import React, { useState } from 'react';
import styles from "../styles/Splash.js"
import HomeCorosal from "../components/HomeCorosal";
import SplashLogo from "./SplashLogo"

const SplashScreen = (props) => {
    const [currentOpacity,setOpacity] = useState(1)
    return (
        <div style={styles.container}>
            <HomeCorosal 
                isShowIndicator={true} 
                isSplash={true} 
                isStopOnTouch={false}
                showArrows={true}
                currentOpacity = {currentOpacity}
            />
          <SplashLogo onButtonClick = {props.showHome}
                      onFocussed = {()=>{setOpacity(0.3)}}
                      onUnfocussed = {()=>{setOpacity(1)}}  />
        </div>
    )
};

export default SplashScreen; 