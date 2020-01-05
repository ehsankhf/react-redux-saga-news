import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Navigation = (props) => {
    const navigateByEventKey = eventKey => {
        switch (eventKey) {
            case 'articles':
                props.history.push('/articles');
                break;
            case 'sources':
                props.history.push('/sources');
                break;
            case 'head-news':
            default:
                props.history.push('/');
                break;
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onSelect={navigateByEventKey} eventKey='head-news'>Home</Nav.Link>
                    <Nav.Link onSelect={navigateByEventKey} eventKey='articles'>Articles</Nav.Link>
                    <Nav.Link onSelect={navigateByEventKey} eventKey='sources'>Sources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
