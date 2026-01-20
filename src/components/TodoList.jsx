import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, isEmpty }) {
  if (isEmpty) {
    return (
      <div className="text-center text-gray-400 py-8">
        No todos yet. Add one to get started!
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        No todos in this filter.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;