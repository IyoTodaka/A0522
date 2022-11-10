import React from 'react'
import withLoading from '../HOC/withLoading'
const Button = ({ children, onClick, className = ''}) => {
  return (
    <button 
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>
    )
}

export default withLoading(Button)