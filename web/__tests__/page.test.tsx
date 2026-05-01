import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// Mock the Sanity client to avoid importing ESM-only dependencies in Jest.
// The Home page is an async Server Component that fetches from Sanity,
// so we mock the module to return empty data and prevent network calls.
jest.mock('../src/lib/sanity', () => ({
  sanityClient: {
    fetch: jest.fn().mockResolvedValue([]),
  },
  config: {
    projectId: 'test',
    dataset: 'production',
    apiVersion: '2023-03-20',
    useCdn: false,
  },
  sanityFetch: jest.fn().mockResolvedValue([]),
}))

jest.mock('../src/lib/sanityImage', () => ({
  getImageUrl: jest.fn().mockReturnValue(null),
  getHotspotPosition: jest.fn().mockReturnValue('center center'),
  urlForImage: jest.fn().mockReturnValue(null),
}))

import Home from '../src/app/page'

describe('Home', () => {
  it('renders the main heading', async () => {
    // Home is an async Server Component — await it to get the JSX
    const jsx = await Home()
    render(jsx)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the Book Appointment CTA', async () => {
    const jsx = await Home()
    render(jsx)
    const button = screen.getByRole('link', { name: /book appointment/i })
    expect(button).toBeInTheDocument()
  })
})
