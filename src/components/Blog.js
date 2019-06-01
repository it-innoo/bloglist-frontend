import React, { useState } from 'react'


const Blog = ({ blog }) => {
  const [showAll, setShowAll] = useState(false)

  const handleClick = (event) => {
    setShowAll(!showAll)
    console.log(`showAll: ${showAll}`)
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
    console.log(blog)
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
          <button>like</button>
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