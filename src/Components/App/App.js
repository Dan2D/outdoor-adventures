import React, {Suspense, lazy} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./App.scss";

const Home = lazy(() => import("../Pages/Home"));
const Explore = lazy(() => import("../Pages/Explore"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));

function App() {
    return (
        <Router>
            <Nav />
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route exact path="/" component={Home} />
                        <Route path="/explore" component={Explore} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Suspense>
                </Switch>
            <Footer />
        </Router>
    )
}

export default App
