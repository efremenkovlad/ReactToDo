import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from "react-router-dom";

// import { StatusButton, Buttons, ButtonClear } from './Components/Buttons';
// import TodoList from './Components/Todo/TodoList';
// import {getList, addTask, changeState, getTask, clearCompleted, changeStateAll} from './API/requests';
import About from './Components/Pages/About';
import Tasks from './Components/Pages/Tasks';

import './App.css';


class App extends Component {
  // constructor() {
  //   super();

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleKeyDown = this.handleKeyDown.bind(this);
  //   this.onItemChange = this.onItemChange.bind(this);
  //   this.handleChangeFilter = this.handleChangeFilter.bind(this)
  //   this.handleClear = this.handleClear.bind(this)
  //   this.handleChangeSatus = this.handleChangeSatus.bind(this)

  // }

  // state = {
  //   value: '',
  //   filter: 'all',
  //   list: [],
  // };
  // async componentDidMount() {
  //   const list = await getList()

  //   this.setState(({ list }))
  // }

  // async handleClear() {
  //   let list = this.state.list
  //   const listF = list.filter((el) => !el.isCompleted)
  //   list = list.filter((el) => el.isCompleted)
  //   const listId = list.map(el => el.id)
  //   await clearCompleted(listId)
  //   this.setState({list: listF})
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // async handleKeyDown({ keyCode }) {
  //   if (keyCode === 13) {
  //     const data = await addTask(this.state.value);

  //     this.setState(({ value, list }) => {
  //       return { value: '', list: [...list, data] };
  //     })
  //   }
  // }

  // handleChangeFilter(filter) {  
  //   this.setState({ filter })
  // }

  // async handleChangeSatus () {
  //   const data = await changeStateAll()
  //   this.setState({list : data})
  // }

  // async onItemChange(id) {

  //   const task = await changeState(id); 
  //   this.setState(({ list }) => {
  //     return { list: list.map(el => el.id === task.id ? { ...el, isCompleted: task.isCompleted } : el) };
  //   });
  // }


  render() {
    const {history} = this.props
    // const list = this.state.list.filter(({ isCompleted }) => {
    //   if (this.state.filter === 'all') return true;
    //   if (this.state.filter === 'actived') return !isCompleted
    //   else return isCompleted;
    // });

    return (
      <div className="main">
         <Switch> 
          <Route history={history} path='/about' component={About}/>
          <Route history={history} path='/task' component={Tasks}/>
          <Redirect from='/' to='/task'/> 
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
