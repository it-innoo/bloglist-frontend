import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import blogService from '../services/blogs'

const Blogit = (props) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (event) => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      
      <p>
        {props.user.name} logged in
      </p>
      <button onClick={props.logoutHandler}>logout</button>

      <BlogForm
        blogit={blogs}
        addHandler={addBlog}
      />

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default Blogit
