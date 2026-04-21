import type { Todo } from '../types/todo'

type TodoItemProps = {
  todo: Todo
  isEditing: boolean
  editingTitle: string
  onEditingTitleChange: (value: string) => void
  onToggle: (todoId: string) => void
  onDelete: (todoId: string) => void
  onStartEdit: (todo: Todo) => void
  onSaveEdit: (todoId: string) => void
}

export function TodoItem({
  todo,
  isEditing,
  editingTitle,
  onEditingTitleChange,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
}: TodoItemProps) {
  return (
    <li>
      {isEditing ? (
        <>
          <input
            aria-label={`Edit ${todo.title}`}
            value={editingTitle}
            onChange={(event) => onEditingTitleChange(event.target.value)}
          />
          <button
            type="button"
            aria-label={`Save ${todo.title}`}
            onClick={() => onSaveEdit(todo.id)}
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
              onChange={() => onToggle(todo.id)}
            />
            {todo.title}
          </label>
          <button
            type="button"
            aria-label={`Edit ${todo.title}`}
            onClick={() => onStartEdit(todo)}
          >
            Edit
          </button>
          <button
            type="button"
            aria-label={`Delete ${todo.title}`}
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  )
}
