'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((current) => current + 1);
  };

  const handleDecrement = () => {
    setCount((current) => current - 1);
  };

  return (
    <>
      <h1>Counter Page</h1>
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}