import React, {Suspense, lazy} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from "../Nav/Nav";
import HeroBg from "../Hero/HeroBg";
import Footer from "../Footer/Footer";
import "./App.scss";

const Home = lazy(() => import(/*webpackChunkName: "home"*/ "../Pages/Home"));
const Explore = lazy(() => import(/*webpackChunkName: "explore"*/ "../Pages/Explore"));
const About = lazy(() => import(/*webpackChunkName: "about"*/ "../Pages/About"));
const Contact = lazy(() => import(/*webpackChunkName: "contact"*/ "../Pages/Contact"));

function App() {
    return (
        <Router>
            <Nav />
            <HeroBg />
                <Switch>
                    <Suspense fallback={<div className='load-fill' />}>
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
