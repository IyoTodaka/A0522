import React from 'react'

const Item = ({ item, onRemoveItem }) => {
  return (
    <div>
        <span style={{ width: '70%'}}>
            <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '25%'}}>{item.author}</span>
        <span style={{ width: '5%'}} >
          <button onClick={() => onRemoveItem(item.objectID)}>&#10006;</button>
        </span>
        
    </div>
  )
}

export default Item