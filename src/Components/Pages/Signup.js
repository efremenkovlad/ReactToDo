import { Component } from "react";
import { signUp } from "../../API/requestsUsers";
import "./Signup.css";

class SignUp extends Component {
  constructor() {
    super();

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  state = {
    email: "",
    password: "",
  };

  async handleSignup() {
    try {
      const { email, password } = this.state;
      const res = await signUp(email, password);
      if (res.user) {
        this.props.history.push("/tasks");
      } else {
        return res;
      }
    } catch (err) {
      return err;
    }
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    // const { history } = this.props

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
          <button className="signup" onClick={() => this.handleSignup()}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
