import React from 'react';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo';

let AddTodo = ({ addTodo }) => {
   let input;

   return (
      <div>
         <input ref={node => {
               input = node;
            }} />
         <button onClick={() => {
            addTodo(input.value);
            input.value = '';
         }}>
            Add Todo
         </button>
      </div>
   );
};
AddTodo = connect(
   null, 
   (dispatch) => ({ 
      addTodo: (value) => dispatch(addTodo(value))
   })
)(AddTodo);

export default AddTodo;