import React from "react";
import { isMobile } from 'mobile-device-detect';
function About() {
  return (
    <div 
    background-image = {require("../Images/bg_1.png")}
     style = {{textAlign:'center',display:'flex',flex:1,flexDirection:isMobile ? 'column':'row',paddingTop:'6%',
     backgroundImage: `url(${require("../Images/bg_1_dim.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 800,
        color:'black',
        fontWeight:'600',
        padding:100,
        backgroundRepeat: 'no-repeat'}}>

      <div style = {{textAlign:'justify',textJustify:'inter-word',fontSize:18,flex:0.5,paddingRight:50}}>
      <h4>About Us</h4>
        <span style={{ color: "blue", fontSize: 22}}>UTK INDIA</span> is a
        company that provides top quality workmanship and exceptional customer
        services to the corporate and private sectors.<br></br>
        <br></br>
        We understand that the comfort and safety of the work place is the key
        to every customer’s satisfaction and productivity. We work diligently to
        ensure that our clients’ heating and cooling systems are always
        operating at their optimum efficiency at all times, guaranteeing
        increased energy efficiency, extended equipment life time, consistent
        comfort in their work and office space, as well as a peace of mind that
        comes from knowing that your equipment will always perform as expected.
        <br></br>
        <br></br>
        Our company offers a full suite of HVAC/MEP services designed to help
        customers achieve maximum efficiency and prevent productivity losses
        resulting from unexpected equipment failure.
        <br></br>
        <br></br>
        Our experienced technicians follow a rigorous service standard as well
        as a health and safety policy that guarantees the success of every
        project that we undertake.
        <br></br>
        <br></br>
        With our fleet of fully licensed, bonded and insured air conditioning
        repair technicians, we offer unparalleled services guaranteed to always
        keep your systems in top shape.
      </div>
      <div style = {{textAlign:'justify',textJustify:'inter-word',fontSize:18,flex:0.5}}>
          <h4>Experience</h4>
          <span style={{ color: "blue", fontSize: 22 }}>UTK INDIA</span> company was founded in Bangalore, India in 2017 January 
          and has become a growing company with favorable MEP projects in-hand.
          <br></br>
       
          With administration and team having an experience of 40 years + in the same field in Middle eastern and India.
          <br></br>
          
            We have a rich experience in Design, Supply and installation, of air conditioning, electrical equipment’s, Refrigeration systems and pump systems.
            UTK INDIA prides itself on operational excellence, which can be directly attributed to our highly competent and diverse workforce.
        <h4 style = {{paddingTop:20}}>Setting the Standard</h4>
        <span style={{ color: "blue", fontSize: 22 }}>UTK INDIA</span> is recognized as an industry leader with a vast pool of resources and experience to implement any project regardless its size and complexity. Our company has successfully undertaken and delivered on some of the most challenging projects both locally and across INDIA.
        <br></br>
        <br></br>
        Be it domestic or commercial, we have professional certified engineers to help you with your needs. We cover all provinces in India. We guarantee speed, quality and efficiency throughout our entire project pipeline. We also offer a full after care support service as standard.
        <br></br>
        <br></br>
        Our company wants deliver complete MEP Solution to costumer at single point with highest Quality and best delivery time.
      </div>

      
    </div>
  );
}

export default About;
