import React from 'react'
import Counter2 from './Counter2';
const UseCallbackDemo = () => {
    const [veggiesQty, setVeggiesQty] = React.useState(0);
    const [fruitsQty, setFruitsQty] = React.useState(0);
  
    const buyVeggies = React.useCallback(() => setVeggiesQty(prev => prev + 1), [])
    const buyFruits = React.useCallback(() => setFruitsQty(prev => prev + 1), [])
  
    return(
      <>
          <Counter2 onClick={buyVeggies} value={veggiesQty}>🥬 Buy veggies</Counter2>
          <Counter2 onClick={buyFruits} value={fruitsQty}>🍍 Buy fruits</Counter2>
      </>
    )
}

export default UseCallbackDemo