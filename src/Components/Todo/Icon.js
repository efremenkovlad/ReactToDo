import React, { Component } from 'react';

class Icon extends Component {

    render(){
      const {isCompleted} = this.props;
      return <div className={isCompleted ? "check" : "uncheck"} type="checkbox"></div>
    }
  
  }

  export default Icon