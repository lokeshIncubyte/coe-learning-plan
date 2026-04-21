import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    addTodo(trimmedTitle);
    setTitle('');
  };

  const handleToggle = (todoId: string) => {
    toggleTodo(todoId);
  };

  const handleDelete = (todoId: string) => {
    removeTodo(todoId);
  };

  const handleStartEdit = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditingTitle(todo.title);
  };

  const handleSaveEdit = (todoId: string) => {
    const trimmedTitle = editingTitle.trim();
    if (!trimmedTitle) return;
    updateTodoTitle(todoId, trimmedTitle);
    setEditingTodoId(null);
    setEditingTitle('');
  };

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
