import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import './style.css';

const Navigation = () => {

    const history = useHistory();

    const navigate = (route) => {
        history.push(route);    
    }
    return(
        <Navbar expand="md" sticky="top" bg="dark" variant="dark">
            {/* <Nav.Link onClick={e => navigate("/")}>
                <Navbar.Brand >Navbar</Navbar.Brand>
            </Nav.Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                {/*  */}
            <Nav.Link onClick={e => navigate("/")}>Factsheet</Nav.Link>
            <Nav.Link onClick={e => navigate("/")}>Helpline</Nav.Link>
            <Nav.Link onClick={e => navigate("/")}>Volunteer Today</Nav.Link>
            <Nav.Link onClick={e => navigate("/")}>Webinar</Nav.Link>
            <Nav.Link onClick={e => navigate("/")}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navigation;