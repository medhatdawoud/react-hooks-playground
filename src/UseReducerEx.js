import React, { useReducer } from 'react';
import { Button } from './Button';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <Button
        label="increment"
        onClick={() => dispatch({ type: INCREMENT, payload: 3 })}
      />
      <h1>{state.count}</h1>
      <Button label="decrement" onClick={() => dispatch({ type: DECREMENT })} />
    </div>
  );
};

export default UseReducerEx;
