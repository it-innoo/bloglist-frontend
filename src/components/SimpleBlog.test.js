import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title, author and likes', () => {
  const blog = {
    title: 'First class tests',
    author: 'Robert C. Martin',
    likes: 5
  }

  const component = render(
    <SimpleBlog
      blog={blog}
    />
  )

  expect(component.container).toHaveTextContent(
    'First class tests'
  )
  expect(component.container).toHaveTextContent(
    'Robert C. Martin'
  )
  expect(component.container).toHaveTextContent(
    '5'
  )
})
