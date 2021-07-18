import React from 'react';
// import {useHistory} from 'react-router';
import {Navbar, Nav } from 'react-bootstrap';

import './style.css';
import img from '../../images/buttersoft_standalone.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
        const offset = 150;
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
                <img src={img} width="75vw"></img>
                <div style={{display: "block", paddingLeft: "12px"}}>
                    <div>
                        <i style={{paddingRight: "6px"}} class="far fa-envelope"></i>
                        <span style={{fontSize: "small"}}>dummyemail@quickhack2021.com</span>
                    </div>
                    <div>
                        <i style={{paddingRight: "6px"}} class="fas fa-phone"></i>
                        <span style={{fontSize: "small"}}>+60123456789</span>
                    </div>  
                </div>
                </div>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link onClick={e => navigate("factsheet")}>Factsheet</Nav.Link>
            <Nav.Link onClick={e => navigate("diagnosis")}>Self Diagnosis</Nav.Link>
            <Nav.Link onClick={e => navigate("helpline")}>Helpline</Nav.Link>
            <Nav.Link onClick={e => navigate("volunteer")}>Volunteer Today</Nav.Link>
            <Nav.Link onClick={e => navigate("event")}>Event</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navigation;