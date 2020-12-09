import React from 'react';
import Signup from './Views/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

import './App.scss';

import Home from './components/HomePage';
import Login from './components/Login';
import ViewProfile from './components/profile/View';
import CompleteProfile from './components/profile/Complete';
import UpdateProfile from './components/profile/Update';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => (
  <div className='app'>
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/profile' component={ViewProfile} />
          <Route
            exact
            path='/profile/complete/:slug'
            component={CompleteProfile}
          />
          <Route exact path='/profile/update/:slug' component={UpdateProfile} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  </div>
);

export default App;
