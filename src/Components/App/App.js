import React, {Suspense, lazy} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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
            <div className='page-container'>
            <Nav />
            <HeroBg />
            <Route render={({location}) => {
                return (
                <TransitionGroup>
                    <CSSTransition
                    key={location.pathname}
                    timeout={1200}
                    unmountOnExit
                    classNames="slide">
                        <div className='transition-container'>     
                            <Suspense fallback={<div className='load-fill' />}>            
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/explore" component={Explore} />
                                    <Route path="/about" component={About} />
                                    <Route path="/contact" component={Contact} />
                                </Switch>
                            </Suspense>
                            <Footer />
                        </div> 
                    </CSSTransition>
                </TransitionGroup>
                )
            }}/>
            
            </div>
        </Router>
    )
}

export default App
