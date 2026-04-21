import { useTodoView } from '../context/TodoViewContext';

export function TodoToolbar() {
  const { filter, setFilter, search, setSearch, isPending } = useTodoView();
  return (
    <section>
      <label>
        Search:{' '}
        <input
          aria-label="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
      <button
        aria-label="all"
        onClick={() => setFilter('all')}
        disabled={filter === 'all'}
      >All</button>
      <button
        aria-label="active"
        onClick={() => setFilter('active')}
        disabled={filter === 'active'}
      >Active</button>
      <button
        aria-label="completed"
        onClick={() => setFilter('completed')}
        disabled={filter === 'completed'}
      >Completed</button>
      {isPending && <span>Updating...</span>}
    </section>
  );
}
