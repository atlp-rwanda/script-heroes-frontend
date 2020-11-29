import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import TravelRequests from "./components/create-travel-requests";

const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/travelrequests" component={TravelRequests} />
      </Switch>
    </Router>
  </div>
);

export default App;
