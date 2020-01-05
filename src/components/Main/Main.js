import React from 'react';
import {Container} from 'react-bootstrap';

import './Main.css';
import Navigation from "../Navigation/Navigation";

import {Route, Switch} from "react-router-dom";
import NewsArticles from "../NewsArticles/NewsArticles";
import Sources from "../Sources/Sources";

function renderRoute() {
    return (
        <Switch>
            <Route exact path="/">
                <NewsArticles/>
            </Route>
            <Route path="/articles">
                <NewsArticles/>
            </Route>
            <Route path="/sources">
                <Sources/>
            </Route>
        </Switch>
    )
}

function Main() {
    return (
        <Container className="Main">
            <Navigation/>
            {renderRoute()}
        </Container>
    );
}

export default Main;
