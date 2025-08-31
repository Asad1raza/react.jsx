import { useState } from "react";
import Apple, { Car, Bike, userKey } from "./doc";
import Todo from "./todo";
import Op from "./op";
import Asad from "./asad";
import Checkbox from "./checkbox";

const App = () => {
  // const name = "Asad";
  // let x = 1;
  // let y = 2;

  // const userObj = {
  //   name: "Asaddddddd Raza",
  //   email: "asraza@gmail.com",
  //   age: 19,
  // };
  // const userObj2 = {
  //   name: "ayan Raza",
  //   email: "asraza@gmail.com",
  //   age: 19,
  // };
  // const userObj3 = {
  //   name: "ahmed Raza",
  //   email: "asraza@gmail.com",
  //   age: 19,
  // };

  // let array = ["subhan", "asad", "arsalan"];

  // function operation(a, b, op) {
  //   if (op === "+") {
  //     return a + b;
  //   } else if (op === "-") {
  //     return a - b;
  //   } else {
  //     return a * b;
  //   }
  // }

  // const callMe = () => {
  //   alert("Button was clicked");
  // };

  // const [fruit, setFruit] = useState("Apple");
  // const handleFruit = () => {
  //   setFruit("Banana");
  // };

  // const [rcount, setRCount] = useState(10);
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>

      {count === 0 ? <h1>Counter is Zero</h1> : null}

      <h1>RCounter: {rcount}</h1>
      <button onClick={() => setRCount(rcount - 1)}>Decrease Counter</button>

      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change to Banana</button>
      <br />
      <button onClick={() => setFruit("Apple")}>Apple</button>
      <br />
      <button onClick={() => setFruit("Banana")}>Banana</button>
      <br />
      <button onClick={callMe}>Call me</button>
      <br />

      <h1>{array[0]}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userObj.age}</h1>
      <h1>{operation(10, 5, "+")}</h1>
      <h1>{name ? name : "User Not Found"}</h1>
      <p>{x + y}</p>
      <h6>{x - y}</h6>
      <h3>{x * y}</h3>

      <button onClick={() => alert("Hello World")}>Click me</button>

      <h1 className="bg-red">hello</h1>

      {/* Components */}
      {/* <Todo />
      <Op Op={userObj} />
      <Op Op={userObj2} />
      <Op Op={userObj3} />
      <Apple />
      <Car />
      <Bike />
      <h1>{userKey}</h1> */}

      
      {/* <Asad /> */}
      <Checkbox/>
    </>
  );
};

export default App;
