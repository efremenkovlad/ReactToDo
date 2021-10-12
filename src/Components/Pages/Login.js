import { render } from "@testing-library/react"
import { Component } from "react"
import { signIn } from "../../API/requestsUsers";



class Login extends Component{

    constructor() {
        super();

        this.handleSignin = this.handleSignin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    state = {
        email: '',
        password: '',
    };

    async handleSignin() {
        const {email, password} = this.state
        const res = await signIn (email, password)
        if (res.user) {
            window.location.assign('/task')
        }
      }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value});
        }

    handleChangePassword(event) {
        this.setState({ password: event.target.value});
        }
    render() {

        return (
        <div>
        <input type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
        <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
        <button className="signup" onClick={() => this.handleSignin()}>Login</button>
        </div>
        )
    }

}

export default Login