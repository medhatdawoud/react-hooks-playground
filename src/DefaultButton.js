/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';

export const DefaultButton = ({ onClick, label }) => {
  const renderRef = useRef(0);
  useEffect(() => console.log(renderRef.current++));

  return (
    <button className="btn btn-primary mt-3" onClick={onClick}>
      {label}
    </button>
  );
};
