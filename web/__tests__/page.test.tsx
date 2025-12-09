import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the Book Appointment CTA', () => {
    render(<Home />)
    const button = screen.getByRole('link', { name: /book appointment/i })
    expect(button).toBeInTheDocument()
  })
})
