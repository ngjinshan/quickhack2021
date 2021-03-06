import React from 'react';
// import {useHistory} from 'react-router';
import {Navbar, Nav } from 'react-bootstrap';

import './style.css';
import img from '../../images/buttersoft_standalone.png'

const Navigation = () => {

    // const history = useHistory();

    const navigate = (id) => {
        let el = document.getElementById(id);
        // let rect = el.getBoundingClientRect();
        // let elTop = rect.y;

        // console.log(elTop);

        // window.scrollTo({
        //     top: elTop,
        //     behavior: 'smooth'
        // })
        // el.scrollIntoView();
        const offset = window.innerHeight/8;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
        });
    }
    return(
        <Navbar expand="md" sticky="top" style={{backgroundColor: "white"}}>
            <Navbar.Brand>
                <div style={{display: "flex", justifyContent: "start", alignItems: "center", width: "100%"}}>
                <img alt="logo" src={img} width="75vw"></img>
                <div style={{display: "block", paddingLeft: "6px"}}>
                    <div>
                        <i style={{paddingRight: "6px"}} className="far fa-envelope fa-xs"></i>
                        <span style={{fontSize: "x-small"}}>dummyemail@quickhack2021.com</span>
                    </div>
                    <div>
                        <i style={{paddingRight: "6px"}} className="fas fa-phone fa-xs"></i>
                        <span style={{fontSize: "x-small"}}>+60123456789</span>
                    </div>  
                </div>
                </div>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link onClick={e => navigate("factsheet")}>Factsheet</Nav.Link>
            <Nav.Link onClick={e => navigate("diagnosis")}>Mental Health Diagnosis</Nav.Link>
            <Nav.Link onClick={e => navigate("helpline")}>Helpline</Nav.Link>
            <Nav.Link onClick={e => navigate("event")}>Event</Nav.Link>
            <Nav.Link onClick={e => navigate("volunteer")}>Volunteer Today</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navigation;