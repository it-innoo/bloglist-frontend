import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog }) => {
  const [showAll, setShowAll] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setShowAll(!showAll)
  }

  const handleLikes = (event) => {
    event.preventDefault()
    const likedBlog = { ...blog, likes: blog.likes +=1 }
    try {
      blogService.like(likedBlog.id, likedBlog)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemove = (event) => {
    event.preventDefault()
    try {
      if (window.confirm(`remove blog ${blog.title}`)) {
        blogService.remove(blog.id)
      }
    } catch (error) {
      console.log('error is: ', error)
    }
  }

  const showBlog = () => {
    return (
      <div>
        <p>
          {blog.title} {blog.author}
        </p>
      </div>
    )
  }

  const showBlogDetails = () => {
    const user = window
      .localStorage
      .getItem('loggedinUser')

    return (
      <div>
        <p>
          {blog.title} {blog.author}
        </p>
        <div className="blogDetails">
          <a href={blog.url}  rel="noopener noreferrer" target="_blank">
            {blog.url}
          </a>
          <p>
            {blog.likes} tykkäystä
            <button onClick={handleLikes}>
            like
            </button>
          </p>
          <p>
          Added by {blog.user[0].name}
          </p>
          { user && JSON.parse(user).name === blog.user[0].name ?
            <button onClick={handleRemove}>
            poista
            </button> :
            <p></p>
          }
        </div>
      </div>
    )
  }

  return (
    <div className="blog" onClick={handleClick}>
      {showAll ?
        showBlogDetails() :
        showBlog()
      }
    </div>
  )

}

export default Blog