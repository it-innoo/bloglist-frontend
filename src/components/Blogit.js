import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blogit = (props) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogit => setBlogs(blogit))
  }, [])

  const addBlog = () => {
    blogService.getAll().then(blogit => setBlogs(blogit))
  }

  const blogForm = () => {
    return (
      <Togglable buttonLabel="create blog">
        <BlogForm
          blogit={blogs}
          addHandler={addBlog}
        />
      </Togglable>
    )
  }

  return (
    <div>
      {blogForm()}
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default Blogit
