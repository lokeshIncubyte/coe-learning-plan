import type { FormEvent } from 'react'

type TodoFormProps = {
  title: string
  onTitleChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function TodoForm({ title, onTitleChange, onSubmit }: TodoFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo-input">Todo</label>
      <input
        id="todo-input"
        name="todo"
        type="text"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}
