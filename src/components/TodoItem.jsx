import { Trash2, Check } from 'lucide-react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-purple-600 border-purple-600'
            : 'border-gray-300 hover:border-purple-400'
        }`}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>
      <span
        className={`flex-1 transition-all ${
          todo.completed
            ? 'line-through text-gray-400'
            : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default TodoItem;
