import React from 'react'

const Notification = ({ message, className }) => {
  console.log(`message: ${message}`)
  if (message === null) {
    return null
  }

  console.log(`className: ${className}`)
  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Notification
