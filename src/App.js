import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import About from "./Components/Pages/About";
import Tasks from "./Components/Pages/Tasks";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/Signup";
import Unauth from "./Components/Pages/Unauth";
import PrivateRoute from "./Components/Utils/ProtectedRoute";

import "./App.css";

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className="main">
        <Switch>
          <Route history={history} path="/signup" component={SignUp} />
          <Route history={history} path="/login" component={Login} />
          <PrivateRoute history={history} path="/about" component={About} />
          <PrivateRoute history={history} path="/tasks" component={Tasks} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
