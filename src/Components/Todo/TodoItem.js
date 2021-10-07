import React, { Component } from 'react';
import Icon from "./Icon";


class TodoItem extends Component {
  
    render() {
      const { id, task, isCompleted, onClick } = this.props;
  
      return <div onClick={() => onClick(id)} id={id} className={isCompleted ? "completed" : "actived"}><Icon isCompleted={isCompleted} />{task}</div>
    }
  }



  export default TodoItem