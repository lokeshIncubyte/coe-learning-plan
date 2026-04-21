import { FormEvent, useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return
    }

    setTodos((currentTodos) => [...currentTodos, trimmedTitle])
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
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
