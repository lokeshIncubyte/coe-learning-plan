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
})
