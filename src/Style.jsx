import React, { useState } from "react";

const Style = () => {
  const [cardStyle, setCardStyle] = useState({
    width: "250px",
    border: "2px solid black",
    margin: "10px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  });

  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        User Interface
      </h1>

      <button onClick={() => updateTheme("#ccc", "red")}>Gray Theme</button>
      <br />
      <button onClick={() => updateTheme("black", "green")}>Default Theme</button>
      <br />
      <button onClick={() => setGrid(!grid)}>
        {grid ? "Switch to flex" : "Switch to Row"}
      </button>
      <br />

      <div style={{ display: grid ? "flex" : "block" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px", marginTop: "10px" }}
            src="219983.png"
            alt="profile"
          />
          <div style={{ padding: "10px", color: textColor }}>
            <h2>Asad Raza</h2>
            <h3>Web Developer</h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img
            style={{ width: "200px", borderRadius: "10px", marginTop: "10px" }}
            src="219983.png"
            alt="profile"
          />
          <div style={{ padding: "10px", color: textColor }}>
            <h2>Ali Khan</h2>
            <h3>Designer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style;
