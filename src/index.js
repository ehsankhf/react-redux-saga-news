import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import Main from './components/Main/Main';

ReactDOM.render(
    <Router>
        <Main/>
    </Router>,
    document.getElementById('root')
);
