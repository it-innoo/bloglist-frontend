import React from 'react'
// import ReacDOM from 'react-dom'
import { render,  waitForElement, act } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

/*
beforeAll(() => {
  return localStorage.clear()
})
*/
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

      component.debug()
      let button = component
        .container
        .querySelector('.btn-login')

      expect(button).toBeDefined()
    })

    it('does not show create blog button', async () => {

    })
  })

  describe('when a user is logged in', () => {
    const tester = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    }

    let user

    beforeEach(() => {
      localStorage
        .setItem('loggedinUser', JSON.stringify(tester))
      user = localStorage
        .getItem('loggedinUser')
    })

    it('renders all blogs', async () => {
      expect(user).not.toBeNull()
    })

    it('shows logout button', async () => {
      expect(user).not.toBeNull()
      expect(user).toBeDefined()
      expect(user).toEqual(JSON.stringify(tester))

      console.log(localStorage)

      let component
      act(() => {
        component = render(<App />)
      })
      /*
      await waitForElement(
        () => component.container.querySelector('.btn-logout')
      )

      let button = component
        .container
        .querySelector('.btn-logout')

      expect(button).toBeDefined()
*/
    })

    it('shows create blog button', async () => {

    })
  })
})
