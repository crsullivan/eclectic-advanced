import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import Contact from "./components/Contact"
import History from "./utils/History";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {
  return (
    <Router history={History}>
        <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;