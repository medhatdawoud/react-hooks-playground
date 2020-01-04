/* eslint-disable react/prop-types */
import React, { useState, useRef, useLayoutEffect } from 'react';

const Message = ({ boxRef, children }) => {
  const msgRef = useRef(null);
  useLayoutEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    msgRef.current.style.top = `${rect.height + rect.top}px`;
  });

  return (
    <span
      ref={msgRef}
      style={{ position: 'relative', border: '1px solid red' }}
    >
      {children}
    </span>
  );
};

export const UseLayoutEffectEx = () => {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          background: 'green',
          color: 'white',
        }}
        onClick={() => setShow((s) => !s)}
      >
        Show Message
      </div>
      {show && <Message boxRef={boxRef}>This is the floating message</Message>}
    </div>
  );
};
