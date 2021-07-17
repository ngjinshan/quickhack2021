import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import './style.css';
import { isElement } from 'react-dom/test-utils';

const Navigation = () => {

    const history = useHistory();

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
        const offset = 75;
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
        <Navbar expand="md" sticky="top" bg="dark" variant="dark">
            {/* <Nav.Link onClick={e => navigate("/")}>
                <Navbar.Brand >Navbar</Navbar.Brand>
            </Nav.Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link onClick={e => navigate("factsheet")}>Factsheet</Nav.Link>
            <Nav.Link onClick={e => navigate("diagnosis")}>Self Diagnosis</Nav.Link>
            <Nav.Link onClick={e => navigate("helpline")}>Helpline</Nav.Link>
            <Nav.Link onClick={e => navigate("volunteer")}>Volunteer Today</Nav.Link>
            <Nav.Link onClick={e => navigate("webinar")}>Webinar</Nav.Link>
            <Nav.Link onClick={e => navigate("contact")}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navigation;