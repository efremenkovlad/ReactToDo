import React, { Component } from 'react';


class Buttons extends Component {

    render() {
      return (
        <div className="all-button">
          <div className="filters-panel">
          <button className="button_filter" onClick={() => this.props.onChangeFilter("all")}>All</button>
          <button className="button_filter" onClick={() => this.props.onChangeFilter("actived")}>Actived</button>
          <button className="button_filter" onClick={() => this.props.onChangeFilter("completed")}>Completed</button>
          </div>
        </div>
      );
    }
  }


  export default Buttons