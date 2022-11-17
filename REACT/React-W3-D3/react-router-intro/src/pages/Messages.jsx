import React from 'react'
import { Outlet, Routes, Route} from 'react-router-dom'
import Conversations from './Conversations'
import Chats from './Chats'

const Messages = () => {
  return (
    <div>
        <Conversations /> 
        {/* <Outlet /> */}

        <Routes>
            <Route path=":id" element={<Chats />} />
        </Routes>

    </div>
  )
}

export default Messages