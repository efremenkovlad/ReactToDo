import React, { Component } from 'react';
import './ButtonsState.css';


class StatusButton extends Component {
    render() {
      return(
      <div className="button_change_status" onClick= {() => this.props.handleChangeSatus()} />
      );
    }
  }

export default StatusButton;
