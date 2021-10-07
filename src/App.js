import React, { Component } from 'react';
import { StatusButton, Buttons, ButtonClear } from './Components/Buttons';
import TodoList from './Components/Todo/TodoList';
import './App.css'

export default class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleChangeSatus = this.handleChangeSatus.bind(this)
  }

  state = {
    value: '',
    filter: 'all',
    list: [],
  };

  handleClear() {
    let list = this.state.list
    list = list.filter((el) => el.isCompleted === false)
    this.setState({list})
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      this.setState(({ value, list }) => {
        const id = !list.length ? 0 : list[list.length - 1].id + 1;

        return { value: '', list: [...list, { id, task: value, isCompleted: false }] };
      })
    }
  }

  handleChangeFilter(filter) {  
    this.setState({ filter })
  }

  handleChangeSatus () {

    this.setState(({list}) => {
      return list.map(el => !el.isCompleted ? el.isCompleted = true : true)
    })
  }

  onItemChange(id) {

    this.setState(({ list }) => {
      return { list: list.map(el => el.id === id ? { ...el, isCompleted: !el.isCompleted } : el) };
    });
  }


  render() {
    const list = this.state.list.filter(({ isCompleted }) => {
      if (this.state.filter === 'all') return true;
      if (this.state.filter === 'actived') return !isCompleted
      else return isCompleted;
    });

    return (
      <div className="main">
        <div><h3>Task List</h3></div>
        <div className="button_with_input">
        <StatusButton list = {list} handleChangeSatus={this.handleChangeSatus}/>
        <div className="input">
          <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        </div>
        </div>
        <TodoList list={list} onItemChange={this.onItemChange} />
        <div className="footer">
        <div className="itemsleft">{this.state.list.filter(el => !el.isCompleted).length} items left</div>
        <Buttons filter={this.state.filter} onChangeFilter={this.handleChangeFilter}/>
        <ButtonClear handleClear={this.handleClear} />
        </div>
      </div>
    );
  }
}
