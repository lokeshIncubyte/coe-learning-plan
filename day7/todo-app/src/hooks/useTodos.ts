import { useState, useEffect, useCallback } from 'react';
import type { Todo } from '../types/todo';

const STORAGE_KEY = 'todos';

function loadTodos(): Todo[] {
  try {
    const data = window.localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((title: string) => {
    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }, []);

  const updateTodoTitle = useCallback((id: string, title: string) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    updateTodoTitle,
    setTodos, // for advanced use
  };
}
