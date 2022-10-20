import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="Todo-List-App">
      <div className='main-todo-list'>
        <h1>My todo list</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
