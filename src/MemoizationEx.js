import React, { useState, useRef } from 'react';

const MemoObj = {};

const sumFn = (x, y) => {
  console.log(MemoObj);
  return new Promise((resolve, reject) => {
    if (MemoObj[x + 'x' + y]) resolve(MemoObj[x + 'x' + y]);
    setTimeout(() => {
      const res = x + y;
      MemoObj[x + 'x' + y] = res;
      resolve(res);
    }, 2000);
  });
};

export const MemoizationEx = () => {
  const [sum, setSum] = useState(0);
  const firstNum = useRef();
  const lastNum = useRef();

  const handleSum = () => {
    sumFn(+firstNum.current.value, +lastNum.current.value).then((res) =>
      setSum(res)
    );
  };

  return (
    <div className="container text-center mt-5">
      sum: {sum}
      <br />
      <input ref={firstNum} />
      <br />
      <input ref={lastNum} />
      <br />
      <button className="btn btn-success" onClick={handleSum}>
        Calc
      </button>
    </div>
  );
};
