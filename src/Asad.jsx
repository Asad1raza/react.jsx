import React, { useState } from "react";

const Asad = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  
  const handleClear = () => {
    setName("");
    setPassword("");
    setEmail("");
    setSkills([]);
  };

  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };

  return (
    <div>
      <h3>Select your skills</h3>

      <input onChange={handleSkills} type="checkbox" id="php" value="PHP" checked={skills.includes("PHP")} />
      <label htmlFor="php">PHP</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="js" value="JavaScript" checked={skills.includes("JavaScript")} />
      <label htmlFor="js">JavaScript</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="node" value="Node" checked={skills.includes("Node")} />
      <label htmlFor="node">Node</label>
      <br /><br />

      <h4>Selected Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <hr />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <hr />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <hr />

      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br /><br />

      <button type="button">Submit</button>
      <hr />
      <button type="button" onClick={handleClear}>Clear All</button>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h4>{email}</h4>
    </div>
  );
};

export default Asad;
