import React from 'react'

const Item = ({ item }) => {
  return (
    <div>
        <span style={{ width: '70%'}}>
            <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '25%'}}>{item.author}</span>
    </div>
  )
}

export default Item