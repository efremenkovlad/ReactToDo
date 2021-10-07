import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {

    render() {
      return <div className="todo-list">
        {this.props.list.map((item) => <TodoItem key={item.id} onClick={this.props.onItemChange} {...item} ></TodoItem>)}
      </div>
    }
  }


  export default TodoList