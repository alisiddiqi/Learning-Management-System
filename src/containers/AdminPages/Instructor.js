import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Instructor.css"
const API_HOST = "http://localhost:5000";
const STUDENT_API_URL = `${API_HOST}/instructor`;

function App (){
   const [data, setData]=useState([]);
   const fetchInstructor = ()=>{
      fetch(`${STUDENT_API_URL}`)
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  useEffect(()=>{
      fetchInstructor();
  },[]);

  return (
   <div className="container">
       <h1> Instructor List </h1>
       <table>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th className="age"> Age </th>
                   <th>Email address</th>
                   <th>Courses</th>
               </tr>
           </thead>
           <tbody>
              {
                 data.map((item)=>(
                    <tr key={item.id}>
                     <td>{item.id}</td>
                     <td>{item.first_name}</td>
                     <td> {item.last_name}</td>
                     <td>{item.age}</td>
                     <td> {item.email}</td>
                     <td> {item.courses}</td>
                     </tr>
                 ))
              }
           </tbody>
         </table>
      </div>
  );
}

export default App