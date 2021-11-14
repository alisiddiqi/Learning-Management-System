import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Students.css"

function App (){
   const [data, setData]=useState([]);
   const fetchStudents = ()=>{
      fetch('/students')
      .then(res=>res.json())
      .then(json=>setData(json));
  }
    console.log(data.length)
  useEffect(()=>{
      fetchStudents();
  },[]);

  return (
   <div className="container">
       <h1> Student List </h1>
       <table>
           <thead>
               <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th className="age"> Address</th>
                   <th>Role</th>
               </tr>
           </thead>
           <tbody>
              {
                 data.map((item)=>(
                    <tr key={item[0]}>
                     <td>{item[0]}</td>
                     <td> {item[2]}</td>
                     <td>{item[3]}</td>
                     <td> {item[4]}</td>
                     </tr>
                 ))
              }
           </tbody>
         </table>
      </div>
  );
}

export default App