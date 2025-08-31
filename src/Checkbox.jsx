import React, { useState } from 'react'

const Checkbox = () => {
    const [gender,setGender]=useState("female")
    const [city,setCity]=useState("islamabad")


  return (
    <div>
        <h4>Select Your Gendre</h4>
        <br />
        <input type="checkbox" onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender =="male"} id="male" />
        <label htmlFor="male">Male</label>
        <br />
        <br />
        <input type="checkbox" onChange={(event)=>setGender(event.target.value)} name='gender' value={"female"} checked={gender == "female"}  id='female' />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <h4>Selected Gender:{gender}</h4>
        <br /><br />
        <h4>Select Your City</h4>
        <br />
        <select onChange={(event)=>setCity(event.target.value)} defaultValue={'islamabad'}>
            <option value="karachi">karachi</option>
               <option value="hyderabad">Hyderabad</option>
                  <option value="islamabad">Islamabad</option>
        </select>
        <h4>Selected City:{city}</h4>
      
    </div>
  )
}

export default Checkbox
