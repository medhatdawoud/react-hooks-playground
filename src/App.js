import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');

  const handleCounter = () => setCounter((c) => c + 1);
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

  return (
    <div className="container text-center pt-5">
      <button className="btn btn-primary" onClick={handleCounter}>
        Count up
      </button>
      <button className="btn btn-primary" onClick={handelTitle}>
        Change title
      </button>
      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
