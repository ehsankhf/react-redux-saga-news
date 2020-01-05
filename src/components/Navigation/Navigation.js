import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Articles</Nav.Link>
                    <Nav.Link href="#link">Sources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
