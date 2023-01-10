import React from 'react'

const TodoListItem = ({ item }) => {
  return (
    <li>
        <div className="info">
            <div>{item.text}</div>
            <div className="time">{item.timestamp}</div>
        </div>
        <i className='close'>x</i>
    </li>
  )
}

export default TodoListItem