import { createContext, useContext, useState, useTransition, useDeferredValue, useMemo } from 'react';

interface TodoViewContextProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  search: string;
  setSearch: (search: string) => void;
  deferredSearch: string;
  isPending: boolean;
}

const TodoViewContext = createContext<TodoViewContextProps | undefined>(undefined);

export function TodoViewProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredSearch = useDeferredValue(search);

  const value = useMemo(() => ({
    filter,
    setFilter,
    search,
    setSearch: (s: string) => startTransition(() => setSearch(s)),
    deferredSearch,
    isPending,
  }), [filter, search, deferredSearch, isPending]);

  return (
    <TodoViewContext.Provider value={value}>
      {children}
    </TodoViewContext.Provider>
  );
}

export function useTodoView() {
  const ctx = useContext(TodoViewContext);
  if (!ctx) throw new Error('useTodoView must be used within a TodoViewProvider');
  return ctx;
}
