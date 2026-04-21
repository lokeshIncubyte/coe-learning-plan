import { FormEvent, useState } from 'react'

type Todo = {
  id: string
  title: string
}

function App() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: trimmedTitle },
    ])
    setTitle('')
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
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
