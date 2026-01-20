import { useState } from 'react';
import TodoInput from './components/TodoInput';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            My Todo List
          </h1>

          <TodoInput onAddTodo={addTodo} />

          <FilterButtons 
            filter={filter}
            setFilter={setFilter}
            totalCount={todos.length}
            activeCount={activeCount}
            completedCount={todos.length - activeCount}
          />

          <TodoList 
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            isEmpty={todos.length === 0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
