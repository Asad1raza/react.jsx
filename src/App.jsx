import { useState } from "react";
import Apple, { Car, Bike, userKey } from "./doc";
import Todo from "./todo";
import Op from "./op";
import Asad from "./asad";
import Checkbox from "./checkbox";
import Clock from "./assets/Clock";
import College from "./college";
import Counter from "./Counter";

const App = () => {
  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);
  const [display,setDisplay]=useState(true)










  const [color, setColor] = useState("green");
  const collegeData = [
    {
      name: "IET karachi",
      city: "Karachi",
      website: "www.iet.com",
      student: {
        name: "Asad",
        age: "20",
        email: "asraza@gmail.com"
      }

    },
    {
      name: "It Hyderabad",
      city: "Hyderabad",
      website: "www.it.com",
      student: {
        name: "Asad",
        age: "20",
        email: "asraza@gmail.com"
      }
    }, {
      name: "lIT lahore",
      city: "lahore",
      website: "www.lit.com",
      student: {
        name: "Asad",
        age: "20",
        email: "asraza@gmail.com"
      }
    }
  ]

  return (
    <>
      <Checkbox />

      <h1>Digital Clock in React JS</h1>

      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      <Clock color={color} />
      <br /><br />
      {

      collegeData.map((college,index)=>(
        <div key={index}>
        <College college={college}/>
        </div>
      ))

      }
      <div>
       {
        display?  <Counter count={count} data={data}/>:null
       }
        <button onClick={()=>setCount(count+1)}>Counter</button>
        <br />
        <button onClick={()=>setData(data+1)}>Data</button>
        <br />
        <button onClick={()=>setDisplay(display)}>Toggle</button>

      </div>
      










    </>
  );
};

export default App;
