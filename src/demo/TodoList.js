import React, { Component, Fragment} from 'react';
import '../assets/index.css';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render(){
    return (
      <Fragment>
        <div>
          <input type="text"
            value={this.state.inputValue}
            onChange={this.handleValueChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li 
              key={index}
              onClick={this.handleItemDelete.bind(this, index)}
              >
                {item}
              </li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleValueChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index){
    const list = [...this.state.list];
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}

export default TodoList