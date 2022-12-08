import React from 'react'
import './App.css'
import Todo from './components/Todo'
import { supabase } from './supabaseClient'

function App() {
  const [user,setUser] = React.useState(null)

  supabase.auth.onAuthStateChange((event, session) => {
    if(session?.user) {
      setUser(u => u = session.user)
    }else{
      setUser(u => u = null)
    }
  })

  const signInHandler = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({ provider: 'github' })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    // setUser(u => u = null)
  }


  return (
    <div className="App">
      {!user ? (
        <button className='btn' onClick={signInHandler}>Sign In With Github</button>
      ):(
        <>
          <button className='btn' onClick={signOut}>Log out</button>
          <Todo />
        </>
      )
      }   
    </div>
  )
}

export default App
