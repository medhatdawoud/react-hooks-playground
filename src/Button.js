/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

export const Button = React.memo(({ counterFn, label, n }) => {
  const renderRef = useRef(0);
  console.log(renderRef.current++);

  return (
    <button className="btn btn-primary mt-3" onClick={() => counterFn(n)}>
      {label}
    </button>
  );
});
