import { useState, useEffect } from 'react'

const Note = ({title, content, color}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

export default Note