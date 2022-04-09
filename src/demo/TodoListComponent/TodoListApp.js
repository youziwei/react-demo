import React, { Fragment, Component } from 'react';
import TodoListItem from './TodoListItem';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.getTodoItem = this.getTodoItem.bind(this)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render(){
    return (
      <Fragment>
        <div>
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleValueChange}
          />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  componentDidMount(){
    axios.get('./api/todolist')
    .then(()=>{
      console.log('获取到了')
    }).catch((error)=>{
      console.log(error)
    })
  }
  getTodoItem(){
    return this.state.list.map((item,index)=>{
        return <TodoListItem
          key={index}
          content={item}
          keyValue={index}
          itemDelete={this.handleItemDelete}
        />
      })
  }
  handleValueChange(e){
    const value = e.target.value
    this.setState(()=>({
      inputValue: value
    }))
  }
  handleBtnClick(){
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1)
      return {
        list
      }
    })
  }
}

export default TodoList;