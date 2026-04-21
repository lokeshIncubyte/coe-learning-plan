import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('adds a todo when user submits non-empty input', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Buy milk')
    await user.click(screen.getByRole('button', { name: /add todo/i }))

    expect(screen.getByText('Buy milk')).toBeInTheDocument()
  })

  it('marks a todo as completed when its toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Buy milk')
    await user.click(screen.getByRole('button', { name: /add todo/i }))

    const todoToggle = screen.getByRole('checkbox', { name: /buy milk/i })
    expect(todoToggle).not.toBeChecked()

    await user.click(todoToggle)

    expect(todoToggle).toBeChecked()
  })

  it('removes a todo when delete action is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Buy milk')
    await user.click(screen.getByRole('button', { name: /add todo/i }))

    await user.click(screen.getByRole('button', { name: /delete buy milk/i }))

    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument()
  })

  it('edits a todo title when edit and save actions are used', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Buy milk')
    await user.click(screen.getByRole('button', { name: /add todo/i }))

    await user.click(screen.getByRole('button', { name: /edit buy milk/i }))

    const editInput = screen.getByRole('textbox', { name: /edit buy milk/i })
    await user.clear(editInput)
    await user.type(editInput, 'Buy oat milk')
    await user.click(screen.getByRole('button', { name: /save buy milk/i }))

    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument()
    expect(screen.getByText('Buy oat milk')).toBeInTheDocument()
  })
})
