import { render } from "@testing-library/react"
import { Component } from "react"
import './About.css'



class About extends Component{

    render() {
        // const { history } = this.props

        return <div className='about'>Hello, it's my app</div>
    }

}

export default About