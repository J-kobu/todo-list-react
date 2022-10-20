import React, { useState } from 'react';
import '../styles/TodoList.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log(todo);
    if(todo.text.trim()) { //Verifica que la cadena de texto no este vacia
      todo.text = todo.text.trim();
      const updatedTodos = [todo, ...todos]; //creamos un arreglo con la tarea nueva al principio y le agregamos todas las tareas de manera individual del arreglo anterior(gracias al spread operator)
      setTodos(updatedTodos);
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <div className='todo-list-container'>
        {
          todos.map((todo) =>  
            <Todo 
              key={todo.id} /*Con key react identifica un elemento de una lista */
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeTodo={completeTodo}
              deleteTodo={removeTodo}
            />
          )
        }
      </div>
    </>
  );
};

export default TodoList;