export default function FilterButtons({ filter, setFilter, totalCount, activeCount, completedCount }) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          filter === 'all' 
            ? 'bg-purple-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All ({totalCount})
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          filter === 'active' 
            ? 'bg-purple-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Active ({activeCount})
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-lg transition-colors ${
          filter === 'completed' 
            ? 'bg-purple-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Completed ({completedCount})
      </button>
    </div>
  );
}

