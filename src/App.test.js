import React from 'react'
// import ReacDOM from 'react-dom'
import { render,  waitForElement, act, prettyDOM } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  describe('when no user logged in', () => {
    it('renders all blogs', async () => {
      let component
      act(() => {
        component = render(<App />)
        component.rerender(<App />)
      })

      await waitForElement(
        () => component.container.querySelector('.blog')
      )

      const blogs = component
        .container
        .querySelectorAll('.blog')
      // console.log(prettyDOM(blogs))
      expect(blogs.length).toBe(6)
    })

    it('shows login button', async () => {

    })

    it('does not show create blog button', async () => {

    })
  })

  describe('when a user is logged in', () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    }

    localStorage
      .setItem('loggedBlogAppUser', JSON.stringify(user))

    it('renders all blogs', async () => {
      /*
      const component = render(
        <App />
      )
      component.rerender(<App />)

      await waitForElement(
        () => {
          return component
            .container
            .querySelector('.blog')
        })

      const blogs = component
        .container
        .querySelectorAll('.blog')
      expect(blogs.length).toBe(6)
      */
    })

    it('shows logout button', async () => {

    })

    it('shows create blog button', async () => {

    })
  })
})
