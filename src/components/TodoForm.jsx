import React, { useState } from 'react';
import '../styles/TodoForm.css';
import { v4 as uuidv4} from 'uuid'; 

const TodoForm = (props) => {

  const [input, setInput] = useState('');

  const changeManager = (e) => { //El evento que recibimos como parametro en esta funcion es diferente a la del parametro de sendManager, porque son diferentes elementos de html
    setInput(e.target.value); //e.target.value nos permite extraer el valor del input
  };

  const sendManager = (e) => {
    e.preventDefault();

    const newTodo = { 
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTodo);
  };

  return (
    <form className='todo-form' onSubmit={sendManager}>
      <input className='todo-input' type='text' placeholder='Write a Todo' name='text' onChange={changeManager} />
      <button className='todo-button'>Add Todo</button>
    </form>
  );
};

export default TodoForm;