import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

const TodoApp = () => (
   <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
   </div>
);

ReactDOM.render(
   <Provider store = {createStore(todoApp)}> 
      <TodoApp />
   </Provider>,
   document.getElementById('root')
);