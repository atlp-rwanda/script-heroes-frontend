import React from "react";
import Login from "./components/Login";
import Signup from "./Views/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";


const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  </div>
);

export default App;
