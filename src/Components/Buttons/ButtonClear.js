import React, { Component } from 'react';


class ButtonClear extends Component {

    render() {
      return (
        <div className="clear-panel">
            <button className="button clear" onClick={() => this.props.handleClear()}> Clear completed</button>
          </div>
      )
    }
  }

  export default ButtonClear