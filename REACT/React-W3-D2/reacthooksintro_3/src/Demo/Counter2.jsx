import React, {memo} from 'react'

const Counter = ({ value, children, onClick }) => {
    console.log("Render: ", children)
  return (
    <div>
      <button onClick={onClick}>{children} : {value}</button>
    </div>
  )
}

export default memo(Counter)