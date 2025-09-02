import React, { useEffect, useState } from 'react';

function Clock({ color = "green" }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "#000",
          width: "150px",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center"
        }}
      >
        {time}
      </h1>
    </div>
  );
}

export default Clock;
