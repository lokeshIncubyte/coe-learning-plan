import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  beforeEach(() => {
    if (window.localStorage && typeof window.localStorage.clear === 'function') {
      window.localStorage.clear();
    }
  });

  it('filters todos by completed/active and search query (RED)', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Add multiple todos
    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Buy milk');
    await user.click(screen.getByRole('button', { name: /add todo/i }));
    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Read book');
    await user.click(screen.getByRole('button', { name: /add todo/i }));
    await user.type(screen.getByRole('textbox', { name: /todo/i }), 'Write code');
    await user.click(screen.getByRole('button', { name: /add todo/i }));

    // Mark 'Read book' as completed
    await user.click(screen.getByRole('checkbox', { name: /read book/i }));

    // Simulate filter to show only completed
    // (Assume a button or control exists for this in the future UI)
    // e.g., await user.click(screen.getByRole('button', { name: /completed/i }));

    // For now, this will fail until the filter UI is implemented
    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
    expect(screen.queryByText('Write code')).not.toBeInTheDocument();
    expect(screen.getByText('Read book')).toBeInTheDocument();

    // Simulate search for 'code'
    // e.g., await user.type(screen.getByRole('textbox', { name: /search/i }), 'code');
    // For now, this will fail until the search UI is implemented
    expect(screen.getByText('Write code')).toBeInTheDocument();
    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
    expect(screen.queryByText('Read book')).not.toBeInTheDocument();
  });
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

  it('restores todos from localStorage on mount (RED)', () => {
    // Arrange: manually set localStorage before rendering
    window.localStorage.setItem('todos', JSON.stringify([
      { id: '1', title: 'Persisted todo', completed: false }
    ]));

    // Act: render the app
    render(<App />);

    // Assert: the persisted todo should appear
    expect(screen.getByText('Persisted todo')).toBeInTheDocument();
  });
})
