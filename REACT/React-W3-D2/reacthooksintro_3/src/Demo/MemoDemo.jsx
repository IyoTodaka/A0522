import React from "react";
import Counter from "./Counter";

const MemoDemo = () => {
  const [veggiesQty, setVeggiesQty] = React.useState(0);
  const [fruitsQty, setFruitsQty] = React.useState(0);

  const buyVeggies = () => setVeggiesQty(prev => prev + 1)

  return(
    <>
        <button onClick={buyVeggies}>Buy a vegetable</button>
        <Counter value={veggiesQty}>🥬 Buy veggies</Counter>
        <Counter value={fruitsQty}>🍍 Buy fruits</Counter>
    </>
  )
};

export default MemoDemo;
