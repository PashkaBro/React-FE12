import React from 'react';
import '../App.css';
import {Button, Card, Form, FormControl, Navbar} from "react-bootstrap";
import {Nav} from 'react-bootstrap'


function Footer(props) {
    return (

        <Navbar bg='dark' variant='dark' fixed='bottom'>
            <Nav>
                <Nav.Link href="#home">{props.menu[1]}</Nav.Link>
                <Nav.Link href="#features">{props.menu[2]}</Nav.Link>
                <Nav.Link href="#pricing">{props.menu[3]}</Nav.Link>
            </Nav>
        </Navbar>

    );
}

export default Footer;
