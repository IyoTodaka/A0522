import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number | null>(null)
  return (
    <div>
        <button onClick={() => setCount(c => (c === null ? 1 : c + 1))}>
            {count === null ? "Click to start" : count}
        </button>
    </div>
  )
}

export default Counter