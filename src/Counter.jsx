import React, { useEffect } from 'react'

const Counter = ({ count,data }) => {

  const handleCounter = () => {
    console.log("handleCounter called");
  };
   const dataCounter = () => {
    console.log("handle DataCounter called");

  };
 useEffect(() => {
    dataCounter();
  }, [data]);

  useEffect(() => {
    handleCounter();
  }, [count]);

  return (
    <div>
      <h1>Counter Component {count}</h1>
      <h1>Data Value{data}</h1>
    </div>
  );
};

export default Counter;
