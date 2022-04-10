/* eslint-disable import/no-anonymous-default-export */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType'
const defaultState = {
  inputValue: '',
  list: []
}

// reducer可以接收state，但是绝对不能修改state，所以当拿到state后，需要拷贝一份新的出来。
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // 返回给store，store会用新数据替换掉老数据
    return newState
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = '';
    return newState
  }
  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}
