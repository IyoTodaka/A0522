import React, { useReducer, Reducer } from "react";

type State = {
  count: number;
};

type Props = {
  incrementStep: number;
  decrementStep: number;
  initialCount?: number;
};

type Increment = {
  readonly type: "increment";
  readonly incrementStep: number;
};
type Decrement = {
  readonly type: "decrement";
  readonly decrementStep: number;
};
type Double = {
  readonly type: "double";
};
type Reset = {
  readonly type: "reset";
  readonly initialCount: number;
};

type Actions = Increment | Decrement | Double | Reset;

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.incrementStep };
    case "decrement":
      return { count: state.count - action.decrementStep };
    case "double":
      return { count: state.count * 2 };
    case "reset":
      return resetState(action.initialCount);
    default:
      neverReached(action);
  }
  return state;
};

const neverReached = (never: never) => {}
const resetState = (initialCount: number): State => ({ count: initialCount });

const CounterTwo = ({
  incrementStep,
  decrementStep,
  initialCount = 0
}: Props) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>, number>(
    reducer,
    initialCount,
    resetState
  );
  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment", incrementStep })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement", decrementStep })}>
        Subtract
      </button>
      <button onClick={() => dispatch({ type: "double" })}>Double</button>
      <button onClick={() => dispatch({ type: "reset", initialCount })}>
        Reset
      </button>
    </>
  );
};

export default CounterTwo;
