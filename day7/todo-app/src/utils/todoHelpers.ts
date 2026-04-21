import type { Todo } from '../types/todo'

export const createTodo = (title: string): Todo => ({
  id: crypto.randomUUID(),
  title,
  completed: false,
})

export const toggleTodoById = (todos: Todo[], todoId: string): Todo[] =>
  todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  )

export const removeTodoById = (todos: Todo[], todoId: string): Todo[] =>
  todos.filter((todo) => todo.id !== todoId)

export const updateTodoTitleById = (
  todos: Todo[],
  todoId: string,
  title: string,
): Todo[] =>
  todos.map((todo) => (todo.id === todoId ? { ...todo, title } : todo))
