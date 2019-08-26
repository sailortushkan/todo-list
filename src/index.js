import React from 'react';
import ReactDOM from 'react-dom';
 
export  function Hello(props) {
   return <h1>Hello, {props.name}!</h1>;
}
 
ReactDOM.render(
    <Hello name="Sara" />,
    document.getElementById('root')
  );
