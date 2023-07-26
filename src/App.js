import React, { useState,useEffect } from "react";
import './App.css';
function App() {
  const [Data,setData]=useState([]);
  const [flag,setFlag]=useState(0);
  useEffect(()=>{
    fetch(`https://reqres.in/api/users?page=1`).then(
  response => response.json()
).then(
    Data1 => setData(Data1.data)
)
  },[Data]);
  const d=Data.map(
    d=>
         <tr key={d.id}>
     <td>{d.first_name}</td>
      <td>{d.last_name}</td>
      <td>{d.email}</td>
      <td>{d.avatar}</td>
      </tr>
    );
   const disp=()=>{
    setFlag(1);
   }
  return (
    <div>
        <center>
           <h1>Users Details</h1>
           <button onClick={disp}>Get Users</button><br></br><br></br>
           <table>
           {flag===1?d:""}  
      </table>
      </center>
    </div>
  );
  }
export default App;

