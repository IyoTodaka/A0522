
import React from 'react'

const Form = ({ afterSubmit }) => {
  return (
    <form onSubmit={afterSubmit}>
        <input type="text" name="username" placeholder='Enter username' />
        <br/>
        <input type="password" name="password" placeholder='Enter password' />
        <br/>
        <button type="submit">Sign Up</button>
    </form>
  )
}

export default Form