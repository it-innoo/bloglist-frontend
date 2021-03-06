import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blogit = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogit => setBlogs(blogit))
  }, [])

  const blogFormRef = React.createRef()

  const addBlog = () => {
    blogService.getAll().then(blogit => setBlogs(blogit))
    blogFormRef.current.toggleVisibility()
  }


  const blogForm = () => {
    return (
      <Togglable
        buttonLabel="create blog"
        className="btn-blogform"
        ref={blogFormRef}>
        <BlogForm
          blogit={blogs}
          addHandler={addBlog}
        />
      </Togglable>
    )
  }

  const user = window.localStorage.getItem('loggedinUser')

  return (
    <div>
      {user !== null && blogForm()}
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
    </div>
  )
}

export default Blogit
