import React, { Fragment, Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from '../../store/index.js';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from '../../store/actionCreators'

class TodoListAntd extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // 只要store改变，handleStoreChange就会被执行
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (
      <Fragment>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
          <Input 
            placeholder="请输入" 
            value={this.state.inputValue}
            style={{width:'300px',marginRight:'10px'}}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>Primary</Button>
        </div>
        <List
          size="large"
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
          style={{width:'500px',marginLeft:'10px',marginTop:'20px'}}
    />
      </Fragment>
    )
  }
  handleInputChange(e){
    store.dispatch(getInputChangeAction(e.target.value))
    // store.dispatch({
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // })
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    store.dispatch(getAddItemAction())
  }
  handleItemDelete(index){
    store.dispatch(getDeleteItemAction(index))
  }
}

export default TodoListAntd;