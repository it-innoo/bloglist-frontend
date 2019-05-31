import React from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'

const Blogit = (props) => {
  console.log('Blogit props: ', props)
  return (
    <div>
      <h2>blogs</h2>
      <p>
        {props.user.name} logged in
      </p>
      <button onClick={props.logoutHandler}>logout</button>

      <BlogForm
        blogit={props.blogs}
      />

      {props.blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default Blogit
