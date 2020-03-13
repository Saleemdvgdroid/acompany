import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Styles from '../styles/header.css'
function Header() {
    return (
        <Navbar collapseOnSelect sticky = {'top'} expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home" style = {Style.titleLine}>
                <img src= {require("../Images/logo.png")}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style = {Style.navItem}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#services">Products & Services</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#clients">Clients</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                
                    
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}

const Style = {
    navItem:{
        "&:hover": {
            color: "blue",
            backgroundColor:'yellow'
          },
    },
    titleLine:{
        marginLeft:'1.5%',
        padding:10,
        fontSize:28,
        fontWeight:'800',
        color:'white',
        backgroundColor: 'rgb(98 161 217)'
    },
    tagLine:{
        fontSize: 14,
        fontWeight:'400',
        color:'white',
    }
}

export default Header
