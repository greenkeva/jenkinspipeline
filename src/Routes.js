import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import About from "./components/about/About";
import Music from "./components/music/Music";





const Routes = () => {
    return ( 
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route name="Home" path="/" exact component={Home} />
                    <Route name="About" path="/about" component={About} />
                    <Route name="Music" path="/music" component={Music} />
                    <Route name="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;