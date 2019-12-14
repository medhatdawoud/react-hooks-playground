import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');
  const amountRef = useRef();
  const reactMaxRef = useRef(false);

  const handleCounter = () => {
    if (!reactMaxRef.current) {
      if (counter >= 10) {
        reactMaxRef.current = true;
      } else {
        setCounter((c) => c + (+amountRef.current.value || 1));
      }
    } else console.log('you reached max clicks');
  };
  const handelTitle = () => setTitle('semiColon academy');

  useEffect(() => {
    console.log('inside useEffect 1');
    document.title = title;

    return () => {
      setTimeout(() => {
        setTitle('');
        console.log('cleanup');
      }, 1000);
    };
  }, [title]);

  useEffect(() => {
    console.log('inside useEffect 2');
    document.title = `You have clicked ${counter} times`;
  }, [counter]);

  useEffect(() => {
    amountRef.current.focus();
  });

  return (
    <div className="container text-center pt-5">
      <input ref={amountRef} />
      <br />
      <button className="btn btn-primary mt-3" onClick={handleCounter}>
        Count up
      </button>
      <br />
      <button className="btn btn-primary mt-3" onClick={handelTitle}>
        Change title
      </button>
      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
