import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import {Container} from './shared/Container/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import Main from './components/Main/Main';

ReactDOM.render(
    <Container>
        <Router>
            <Main/>
        </Router>
    </Container>,
    document.getElementById('root')
);
