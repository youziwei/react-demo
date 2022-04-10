import React from 'react';
import ReactDOM from 'react-dom';
// 不分组件
// import TodoList from './demo/TodoList';
// 分组件
// import TodoList from './demo/TodoListComponent/TodoListApp'
//使用ant design组件库
import TodoListAntd from './demo/TodoListAntd/TodoListAntd'

ReactDOM.render(
  <React.StrictMode>
    <TodoListAntd />
  </React.StrictMode>,
  document.getElementById('root')
);
