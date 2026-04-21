import { useState } from 'react'
import type { FormEvent } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import type { Todo } from './types/todo'
import { useTodos } from './hooks/useTodos'


function App() {
  const [title, setTitle] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
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

  return (
    <main>
      <h1>Todo App</h1>
      <TodoForm
        title={title}
        onTitleChange={setTitle}
        onSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
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

export default App
