import React, { useState } from 'react'
import blogService from '../services/blogs'


const BlogForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const addBlog = async (event) => {
    event.preventDefault()

    const newBlog = {
      title: title,
      author: author,
      url: url,
    }

    try {
      await blogService
        .create(newBlog)

      props.addHandler()
      setAuthor('')
      setTitle('')
      setUrl('')
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }


  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }



  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <div>
          title
          <input
            type="text"
            placeholder='Blogin otsikko'
            onChange={handleTitleChange}
          />
        </div>

        <div>
          author
          <input
            type="text"
            placeholder='Blogin kirjoittaja'
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url
          <input
            type="text"
            placeholder='Blogin osoite'
            onChange={handleUrlChange}
          />
        </div>

        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm