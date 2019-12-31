import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { Button } from './Button';
import { UseLayoutEffectEx } from './UseLayoutEffectEx';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [divData, setDivData] = useState({});
  const divRef = useRef();

  const [listOfCount, setListOfCount] = useState([1]);

  useLayoutEffect(() => {
    setDivData(divRef.current.getBoundingClientRect());
  }, [listOfCount]);

  const handleAddButtons = () => {
    setListOfCount([...listOfCount, 100]);
  };

  const onClick = useCallback((n) => setCounter((c) => c + n), [setCounter]);

  return (
    <div className="container text-center pt-5">
      <Button label="add more" onClick={handleAddButtons} />
      <div ref={divRef}>
        {listOfCount.map((count) => (
          <>
            <Button counterFn={onClick} label={count} n={count} key={count} />
            <br />
          </>
        ))}
      </div>
      <h1 className="mt-3">{counter}</h1>
      {/* <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(divData, null, 2)}
      </pre> */}

      <UseLayoutEffectEx />
    </div>
  );
}
