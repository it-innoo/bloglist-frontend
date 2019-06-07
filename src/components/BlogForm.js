import React, { useState } from 'react'
import Notification from './Notification'
import blogService from '../services/blogs'

const BlogForm = ({ addHandler }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState(null)
  const [className, setClassName] = useState('note')

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

      addHandler()

      setAuthor('')
      setTitle('')
      setUrl('')

      setMessage(
        `a new blog ${newBlog.title} by ${newBlog.author} added`
      )
      setClassName('info')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (error) {
      setMessage('Unauthorized')
      setClassName('error')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
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
      <Notification
        message={message}
        className={className}
      />
      <form className="form-blog" onSubmit={addBlog}>
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