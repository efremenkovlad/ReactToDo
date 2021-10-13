import { render } from "@testing-library/react"
import { Component } from "react"
import { signUp } from "../../API/requestsUsers";



class SignUp extends Component{
    constructor() {
        super();

        this.handleSignup = this.handleSignup.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    state = {
        email: '',
        password: '',

    };

    async handleSignup() {
        const {email, password} = this.state
        console.log(this.props)
        const res = await signUp(email, password)
        console.log(res);
        if (res.user) {

            this.props.history.push('/tasks');

        }
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value});
        }

    handleChangePassword(event) {
        this.setState({ password: event.target.value});
        }
    render() {
        // const { history } = this.props

        return (
        <div>
        <input type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
        <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
        <button className="signup" onClick={() => this.handleSignup()}>Sign Up</button>
        </div>
        )
    }

}

export default SignUp