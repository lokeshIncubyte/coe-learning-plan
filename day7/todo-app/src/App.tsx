import { useCallback, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoStats } from './components/TodoStats'
import { TodoToolbar } from './components/TodoToolbar'
import { TodoViewProvider, useTodoView } from './context/TodoViewContext'
import type { Todo } from './types/todo'
import { useTodos } from './hooks/useTodos'


function AppBody() {
  const [title, setTitle] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const { filter, deferredSearch } = useTodoView();
  const { todos, addTodo, toggleTodo, removeTodo, updateTodoTitle } = useTodos();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const trimmedTitle = title.trim();
      if (!trimmedTitle) return;
      addTodo(trimmedTitle);
      setTitle('');
    },
    [addTodo, title]
  );

  const handleToggle = useCallback(
    (todoId: string) => {
      toggleTodo(todoId);
    },
    [toggleTodo]
  );

  const handleDelete = useCallback(
    (todoId: string) => {
      removeTodo(todoId);
    },
    [removeTodo]
  );

  const handleStartEdit = useCallback((todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditingTitle(todo.title);
  }, []);

  const handleSaveEdit = useCallback(
    (todoId: string) => {
      const trimmedTitle = editingTitle.trim();
      if (!trimmedTitle) return;
      updateTodoTitle(todoId, trimmedTitle);
      setEditingTodoId(null);
      setEditingTitle('');
    },
    [editingTitle, updateTodoTitle]
  );

  const visibleTodos = useMemo(() => {
    const normalizedSearch = deferredSearch.trim().toLowerCase();
    return todos
      .filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
      })
      .filter((todo) =>
        normalizedSearch ? todo.title.toLowerCase().includes(normalizedSearch) : true
      );
  }, [deferredSearch, filter, todos]);

  return (
    <main>
      <h1>Todo App</h1>
      <TodoToolbar />
      <TodoStats todos={todos} />
      <TodoForm
        title={title}
        onTitleChange={setTitle}
        onSubmit={handleSubmit}
      />
      <TodoList
        todos={visibleTodos}
        editingTodoId={editingTodoId}
        editingTitle={editingTitle}
        onEditingTitleChange={setEditingTitle}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onStartEdit={handleStartEdit}
        onSaveEdit={handleSaveEdit}
      />
    </main>
  );
}

function App() {
  return (
    <TodoViewProvider>
      <AppBody />
    </TodoViewProvider>
  );
}

export default App
