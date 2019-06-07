import React from 'react'
// import ReacDOM from 'react-dom'
import { render,  waitForElement, act } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

beforeAll(() => {
  return localStorage.clear()
})

describe('<App />', () => {
  describe('when no user logged in', () => {
    let user

    beforeEach(() => {
      user = localStorage
        .getItem('loggedinUser')
    })

    it('renders all blogs', async () => {
      expect(user).toBeNull()

      let component
      act(() => {
        component = render(<App />)
      })

      await waitForElement(
        () => component.container.querySelector('.blog')
      )

      const blogs = component
        .container
        .querySelectorAll('.blog')
      expect(blogs.length).toBe(6)
    })

    it('shows login button', async () => {
      expect(user).toBeNull()

      let component
      act(() => {
        component = render(<App />)
      })

      await waitForElement(
        () => component.container.querySelector('.btn-login')
      )

      let button = component
        .container
        .querySelector('.btn-login')

      expect(button).toBeDefined()
    })

    it('does not show create blog button', async () => {
      expect(user).toBeNull()

      let component
      act(() => {
        component = render(<App />)
      })

      let button = component
        .container
        .querySelector('btn-blogform')

      expect(button).toBeNull()
    })
  })

  describe('when a user is logged in', () => {
    const tester = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    }

    beforeEach(() => {
      localStorage
        .setItem('loggedinUser', JSON.stringify(tester))
    })

    it('shows logged user and logout button', async () => {
      const loggedUserJSON = localStorage
        .getItem('loggedinUser')
      const user = JSON.parse(loggedUserJSON)

      expect(user.name).toBe('Teuvo Testaaja')

      let component
      act(() => {
        component = render(<App />)
      })

      await waitForElement(
        () => component.container.querySelector('.btn-logout')
      )

      let button = component
        .container
        .querySelector('.btn-logout')

      expect(button).toBeDefined()

      await waitForElement(
        () => component.container.querySelector('.blog')
      )

      const blogs = component
        .container
        .querySelectorAll('.blog')
      expect(blogs.length).toBe(6)
    })

    it('renders all blogs', async () => {
      const loggedUserJSON = localStorage
        .getItem('loggedinUser')
      const user = JSON.parse(loggedUserJSON)

      expect(user.name).toBe('Teuvo Testaaja')

      let component
      act(() => {
        component = render(<App />)
      })

      await waitForElement(
        () => component.container.querySelector('.blog'),
      )

      const blogs = component
        .container
        .querySelectorAll('.blog')
      expect(blogs.length).toBe(6)

      const button = component
        .container
        .querySelectorAll('.btn-blogform')

      component.debug()
      expect(button).not.toBeNull()
    })

  })
})
