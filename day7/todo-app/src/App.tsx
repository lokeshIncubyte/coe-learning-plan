import { useState } from 'react'
import type { FormEvent } from 'react'

type Todo = {
  id: string
  title: string
  completed: boolean
}

const createTodo = (title: string): Todo => ({
  id: crypto.randomUUID(),
  title,
  completed: false,
})

const toggleTodoById = (todos: Todo[], todoId: string): Todo[] =>
  todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  )

const removeTodoById = (todos: Todo[], todoId: string): Todo[] =>
  todos.filter((todo) => todo.id !== todoId)

function App() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return
    }

    setTodos((currentTodos) => [...currentTodos, createTodo(trimmedTitle)])
    setTitle('')
  }

  const handleToggle = (todoId: string) => {
    setTodos((currentTodos) => toggleTodoById(currentTodos, todoId))
  }

  const handleDelete = (todoId: string) => {
    setTodos((currentTodos) => removeTodoById(currentTodos, todoId))
  }

  const handleStartEdit = (todo: Todo) => {
    setEditingTodoId(todo.id)
    setEditingTitle(todo.title)
  }

  const handleSaveEdit = (todoId: string) => {
    const trimmedTitle = editingTitle.trim()
    if (!trimmedTitle) {
      return
    }

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, title: trimmedTitle } : todo,
      ),
    )
    setEditingTodoId(null)
    setEditingTitle('')
  }

  return (
    <main>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Todo</label>
        <input
          id="todo-input"
          name="todo"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <>
                <input
                  aria-label={`Edit ${todo.title}`}
                  value={editingTitle}
                  onChange={(event) => setEditingTitle(event.target.value)}
                />
                <button
                  type="button"
                  aria-label={`Save ${todo.title}`}
                  onClick={() => handleSaveEdit(todo.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                  />
                  {todo.title}
                </label>
                <button
                  type="button"
                  aria-label={`Edit ${todo.title}`}
                  onClick={() => handleStartEdit(todo)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  aria-label={`Delete ${todo.title}`}
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
