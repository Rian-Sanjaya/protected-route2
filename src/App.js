import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './landingPage';
import { AppPage } from './appPage';
import { ProtectedRoute } from './protectedRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Route component pass argument props to LandingPage or AppPage */}
            <Route path="/" exact component={LandingPage} />
            <ProtectedRoute path="/app" component={AppPage} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
