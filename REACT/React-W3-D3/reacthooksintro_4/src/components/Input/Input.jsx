import React, {useEffect, useRef} from 'react'
import './input.scss';

const Input = ({ id, children, value, type="text", isFocused, onInputChange }) => {
    const inputRef = useRef();

    useEffect(() => {
        if(isFocused){
            inputRef.current.focus();
        }
    }, [isFocused])

  return (
    <>
        <label htmlFor={id}>{children}</label>
        <input 
            type={type} 
            id={id}
            value={value}
            onChange={onInputChange}
            ref={inputRef}
        />
    </>
  )
}

export default Input