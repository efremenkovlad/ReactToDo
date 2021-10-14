import { func } from "prop-types";
import { Component } from "react";
import { getList } from "../../API/requests";
import { logIn } from "../../API/requestsUsers";
import ChechAuth from "./checkAuth";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.handlelogIn = this.handlelogIn.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  state = {
    email: "",
    password: "",
    error: null,
  };

  async handlelogIn() {
    const { email, password } = this.state;
    const res = await logIn(email, password);
    if (res.user) {
      window.location.assign("/tasks");
    } else {
      console.log(res);
      this.setState({ error: "Incorrect email or password!" });
    }
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { error } = this.state;

    return (
      <div className="login">
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </div>
        <div className="sign">
          <button className="signup" onClick={() => this.handlelogIn()}>
            Login
          </button>
          {error && <ChechAuth error={error} />}
        </div>
      </div>
    );
  }
}

export default Login;
