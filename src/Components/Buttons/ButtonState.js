import React, { Component } from 'react';



class ButtonChangeStatus extends Component {
    render() {
      return(
      <div className="button_change_status" onClick= {() => this.props.handleChangeSatus()}></div>
      );
    }
  }

  export default ButtonChangeStatus