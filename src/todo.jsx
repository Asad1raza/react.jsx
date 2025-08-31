import { useState } from "react";

function Todo(data) {
  const [count, setCount] = useState(0); 

  return (

    <div>
    


      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>

      {count === 0 ? (
        <h1>Condition 1</h1>
      ) : count === 1 ? (
        <h1>Condition 2</h1>
      ) : count === 2 ? (
        <h1>Condition 3</h1>
      ) : (
        <h1>Condition Not Matched</h1>
      )}
    </div>
  );
}

export default Todo;

