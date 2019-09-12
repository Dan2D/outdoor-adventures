import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "./App.scss";


function App() {
    return (
        <Router>
            <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            <Footer />
        </Router>
    )
}

export default App
