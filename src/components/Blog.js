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
    const likedBlog = { ...blog, likes: blog.likes +=1}
    try {
      blogService.like(likedBlog.id, likedBlog)
    } catch (error) {
      console.log(error)
    }
  }

  const showBlog = () => {
    return (
      <div>
        <p>
          {blog.title} {blog.author}
        </p>
      </div>)
  }

  const showBlogDetails = () => {
    return (
      <div>
        <p>
          {blog.title} {blog.author}
        </p>
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

      </div>
    )
  }

  return (
    <div className="blog">
      <div onClick={handleClick}>
        {showAll ?
          showBlogDetails() :
          showBlog()
        }
      </div>
    </div>
  )
  
}

export default Blog