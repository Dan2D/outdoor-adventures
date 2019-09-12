import React, {Suspense, lazy} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./App.scss";

const Home = lazy(() => import("../Pages/Home"));
const Rentals = lazy(() => import("../Pages/Rentals"));

function App() {
    return (
        <Router>
            <Nav />
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route exact path="/" component={Home} />
                        <Route path="/rentals" component={Rentals} />
                    </Suspense>
                </Switch>
            <Footer />
        </Router>
    )
}

export default App
