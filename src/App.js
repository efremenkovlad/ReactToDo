import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types'
import './App.css'
import ReactDOM from 'react-dom';

class TodoList extends Component {

  render() {
    return <div className="todo-list">
      {this.props.list.map((item) => <TodoItem key={item.id} onClick={this.props.onItemChange} {...item} ></TodoItem>)}
    </div>
  }
}

class Icon extends Component {

  render(){
    const {isCompleted} = this.props;
    return <div className={isCompleted ? "check" : "uncheck"} type="checkbox"></div>
  }

}

class TodoItem extends Component {
  
  render() {
    const { id, task, isCompleted, onClick } = this.props;

    return <div onClick={() => onClick(id)} id={id} className={isCompleted ? "completed" : "actived"}><Icon isCompleted={isCompleted} />{task}</div>
  }
}


class ButtonClear extends Component {

  render() {
    return (
      <div className="clear-panel">
          <button className="button clear" onClick={() => this.props.handleClear()}> Clear completed</button>
        </div>
    )
  }
}

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


class ButtonChangeStatus extends Component {
  render() {
    const list = this.props.list
    return(
    <div className="button_change_status" onClick= {() => console.log(this.props)}></div>
    );
  }
}


export default class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this)
    this.handleClear = this.handleClear.bind(this)
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

  onItemChange(id) {
    // const list = this.state.list
    // list.forEach((el) => {
    //   if (el.id === id) {
    //     if (el.isCompleted) {
    //       el.isCompleted = false
    //       this.setState({list})
    //     } else { el.isCompleted = true };
    //     this.setState({list});
    //   }
    // })
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
        <ButtonChangeStatus />
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
