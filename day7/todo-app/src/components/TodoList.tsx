import type { Todo } from '../types/todo'
import { TodoItem } from './TodoItem'

type TodoListProps = {
  todos: Todo[]
  editingTodoId: string | null
  editingTitle: string
  onEditingTitleChange: (value: string) => void
  onToggle: (todoId: string) => void
  onDelete: (todoId: string) => void
  onStartEdit: (todo: Todo) => void
  onSaveEdit: (todoId: string) => void
}

export function TodoList({
  todos,
  editingTodoId,
  editingTitle,
  onEditingTitleChange,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingTodoId === todo.id}
          editingTitle={editingTitle}
          onEditingTitleChange={onEditingTitleChange}
          onToggle={onToggle}
          onDelete={onDelete}
          onStartEdit={onStartEdit}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  )
}
