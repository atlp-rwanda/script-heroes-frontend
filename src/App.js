import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/HomePage";
import Login from "./views/login";
import Signup from "./Views/Signup";
import ViewProfile from "./components/profile/View";
import CompleteProfile from "./components/profile/Complete";
import UpdateProfile from "./components/profile/Update";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Roles from "./views/Roles/Roles";

import "./App.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab, faTrashAlt, faEdit);
import AdminRequests from './components/requests/adminRequests/AdminRequests'

const App = () => (
  <div className="app">
    <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={ViewProfile} />
          <Route
            exact
            path="/profile/complete/:slug"
            component={CompleteProfile}
          />
          <Route exact path="/request/manager" component={AdminRequests} />
          <Route exact path="/profile/update/:slug" component={UpdateProfile} />
          <Route exact path="/roles" component={Roles} />
        </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
