import React from 'react';
import {Container} from 'react-bootstrap';

import './Main.css';
import Navigation from "../Navigation/Navigation";

function Main() {
    return (
        <Container className="Main">
          <Navigation />
        </Container>
    );
}

export default Main;
