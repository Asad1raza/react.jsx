import { useState } from "react";
import Userinput from "./Userinput";
import User from "./User";

function App() {
  const [user, setUser] = useState('');

  const [data, setData] = useState({
    name: 'Asad',
    address: {
      city: 'Karachi',
      country: 'Pakistan',
    },
  });

  const handleName = (val) => {
    setData((prevData) => ({
      ...prevData,
      name: val,
    }));
  };

  const handleCity = (city) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        city: city,
      },
    }));
  };

  const handleCountry = (country) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        country: country,
      },
    }));
  };

  return (
    <>
      <Userinput setUser={setUser} user={user} />
      <User user={user} />

      <h1>Updating Objects in State</h1>

      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="text"
        placeholder="update city"
        onChange={(event) => handleCity(event.target.value)}
      />










      
      <input
        type="text"
        placeholder="update country"
        onChange={(event) => handleCountry(event.target.value)}
      />

      <h3>Name: {data.name}</h3>
      <h3>City: {data.address.city}</h3>
      <h3>Country: {data.address.country}</h3>
    </>
  );
}

export default App;
