import { useState } from "react";
import { SubjectContext } from "./assets/Contextdata";
import College from "./College";

export default function App() {
  const [subject,setSubject]=useState("English");
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
        <h1>Context API</h1>
        <College />
      </SubjectContext.Provider>
    </div>
  );
};