import React from 'react';
import '../App.css';
import {Navbar, Nav, Button, NavDropdown, FormControl, Form} from "react-bootstrap";

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">{props.menu[0]}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">{props.menu[1]}</Nav.Link>
                <Nav.Link href="#features">{props.menu[2]}</Nav.Link>
                <Nav.Link href="#pricing">{props.menu[3]}</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>

    );
}

export default Header
;
