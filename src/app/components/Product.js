import React from "react";
import Gallery from 'react-grid-gallery';
import { isMobile } from 'mobile-device-detect';
const IMAGES =
[
    {
        src: require("../Images/pr1.png"),
        thumbnail: require("../Images/pr1.png"),
        thumbnailWidth: 500,
    thumbnailHeight: 300,
    isSelected : true,
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
    },
    {
        src: require("../Images/pr4.png"),
        thumbnail: require("../Images/pr4.png"),
        thumbnailWidth: 500,
    thumbnailHeight: 300,
    },

{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 500,
    thumbnailHeight: 300,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
  src: require("../Images/pr4.png"),
  thumbnail: require("../Images/pr4.png"),
  thumbnailWidth: 500,
thumbnailHeight: 300,
},
]
function Product() {
  return (
    <div>
<h2 style = {{backgroundColor:'rgb(98,161,217)',color:'white',padding:10,marginTop:10}}>Our Products</h2>

   
    <div style={{ display: "flex", flex: 1, flexDirection: isMobile? "column": "row",paddingTop:40 }}>
      
      <div style={Style.gallaryDivBorder}>
      <Gallery showLightboxThumbnails= {true}  backdropClosesModal = {false} showImageCount = {false} images={IMAGES}/>
       
      </div>

      <div style={{ flex: 0.5,paddingLeft:20 }}>
        

       
        <h4>HVAC</h4>
        <ul style = {{marginLeft:20}}>
          <li>Window Air-conditioners</li>
          <li>Split Air-conditioners</li>
          <li>Chillers –Reciprocating (indigenous)</li>
          <li>Chillers –Screw and centrifugal(imported)</li>
          <li>Refrigeration Products</li>
          <li>Variable Refrigeration Systems</li>
          <li>Ventilation System</li>
        </ul>
        <h4>Fire Fighting</h4>
        <ul style = {{marginLeft:20}}>
          <li>Fire Alarm System</li>
          <li>Two Way Talk Back System</li>
          <li>Fire Hydrant Systems</li>
          <li>Heat/Smoke Detectors System</li>
          <li>Fire Sprinkler System</li>
          
        </ul>
      </div>
      </div>
    </div>
  );
}

const Style = {
  gallaryDivBorder:{ marginTop:10, flex: 0.6,borderWidth:3,borderColor:'rgb(98,161,217)',borderRadius:10,borderStyle:"solid",padding:10 }
}

export default Product;
