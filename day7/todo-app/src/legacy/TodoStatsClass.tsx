import { Component } from 'react'

import type { Todo } from '../types/todo'

type TodoStatsClassProps = {
  todos: Todo[]
}

type TodoStatsClassState = {
  total: number
  completed: number
}

export class TodoStatsClass extends Component<
  TodoStatsClassProps,
  TodoStatsClassState
> {
  state: TodoStatsClassState = {
    total: 0,
    completed: 0,
  }

  static getDerivedStateFromProps(props: TodoStatsClassProps): TodoStatsClassState {
    const total = props.todos.length
    const completed = props.todos.filter((todo) => todo.completed).length
    return { total, completed }
  }

  render() {
    return (
      <section aria-label="Todo stats legacy class">
        <strong>Total:</strong> {this.state.total} <strong>Completed:</strong>{' '}
        {this.state.completed}
      </section>
    )
  }
}
