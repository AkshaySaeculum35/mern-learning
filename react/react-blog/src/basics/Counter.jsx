import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCount, setRCount] = useState(10);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>Counter: {rCount}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <button onClick={() => setRCount(rCount - 1)}>
        Update Reverse Counter
      </button>
    </div>
  );
};
export default Counter;
