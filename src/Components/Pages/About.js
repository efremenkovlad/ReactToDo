import { Component } from "react";
import "./About.css";

class About extends Component {
  state = {
    isAuth: false,
  };

  render() {
    return <div className="about">Hello, it's my app</div>;
  }
}

export default About;
