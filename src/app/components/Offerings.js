import React from "react";
import Gallery from 'react-grid-gallery';
import { isMobile } from 'mobile-device-detect';
const IMAGES =
[
    
{
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: require("../Images/pr5.png"),
    thumbnailWidth: 500,
    thumbnailHeight: 300,
    isSelected: true,
},
{
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: require("../Images/pr6.png"),
    thumbnailWidth: 500,
    thumbnailHeight: 300,
},
{
    src: require("../Images/pr7.png"),
    thumbnail: require("../Images/pr7.png"),
    thumbnailWidth: 500,
    thumbnailHeight: 300,
},
{
    src: require("../Images/pr1.png"),
    thumbnail: require("../Images/pr1.png"),
    thumbnailWidth: 500,
    thumbnailHeight: 300,
    caption: "HAVC Description for picture so that people understand",
    tags: [{value: "HVAC", title: "Place"}, {value: "", title: "HVAC"}],
},
{
    src: require("../Images/pr2.png"),
    thumbnail: require("../Images/pr2.png"),
    thumbnailWidth: 500,
    thumbnailHeight: 300,
},
{
    src: require("../Images/pr3.png"),
    thumbnail: require("../Images/pr3.png"),
    thumbnailWidth: 500,
    thumbnailHeight: 300,
}
]
function Offerings() {
  return (
      <div style = {Style.container}>
          <h2 style = {Style.titleStyle}>What we offer</h2>
      
    <div style={Style.containerDiv}>
      <div style={{ flex: 0.5,marginTop:30 }}>
        
        <ul>
          <li>Complete Design for HVAC Systems.</li><br></br>
          <li>Supply, Installation and Commissioning of HVAC Systems.</li><br></br>
          <li>Complete Design for ventilation Systems.</li><br></br>
          <li>Supply, Installation and Commissioning of ventilation systems.</li><br></br>
          <li>Design, Supply and Installation of Fire Fighting System.</li><br></br>
          <li>Electrical load calculation. Panel Design, Supply and Installation for HVAC, Ventilation, and Fire alarm systems.</li>
          <br></br>
          <li>Design, Supply and Installation of fire protection work.</li><br></br>
        </ul>
      </div>
      <div style={Style.gallaryDivBorder}>
      <Gallery showLightboxThumbnails= {true}  backdropClosesModal = {false} showImageCount = {false} images={IMAGES}/>
       
      </div>
      </div>
    </div>
  );
}

export const Style = {
    titleStyle :{backgroundColor:'rgb(98,161,217)',color:'white',padding:10},
    container:{paddingTop:100,paddingBottom:100 },
    containerDiv:{ display: "flex", flex: 1, flexDirection: isMobile? "column": "row"},
    gallaryDivBorder:{ marginTop:30, flex: 0.5,borderWidth:3,borderColor:'rgb(98,161,217)',borderRadius:10,borderStyle:"solid",padding:10 }
}

export default Offerings;
