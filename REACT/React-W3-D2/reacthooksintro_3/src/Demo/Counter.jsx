import React, {memo} from 'react'

const Counter = ({ value, children }) => {
    console.log("Render: ", children)
  return (
    <div>{children} : {value}</div>
  )
}

export default memo(Counter)