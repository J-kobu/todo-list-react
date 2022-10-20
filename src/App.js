import './App.css';
import freecodecamplogo from './images/freecodecamp-logo.svg';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="Todo-List-App">
      <div className='freecodecamp-logo-container'>
        <img src={freecodecamplogo} className='freecodecamp-logo' alt='free code camp logo' />
      </div>
      <div className='main-todo-list'>
        <h1>My todo list</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
