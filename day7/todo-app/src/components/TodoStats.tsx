import { useMemo } from 'react'

import type { Todo } from '../types/todo'

type TodoStatsProps = {
  todos: Todo[]
}

export function TodoStats({ todos }: TodoStatsProps) {
  const { total, completed } = useMemo(() => {
    const total = todos.length
    const completed = todos.filter((todo) => todo.completed).length
    return { total, completed }
  }, [todos])

  return (
    <section aria-label="Todo stats">
      <strong>Total:</strong> {total} <strong>Completed:</strong> {completed}
    </section>
  )
}
