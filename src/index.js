import React from 'react';
import ReactDOM from 'react-dom';
// 不分组件
// import TodoList from './demo/TodoList';
// 分组件
import TodoList from './demo/TodoListComponent/TodoListApp'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
