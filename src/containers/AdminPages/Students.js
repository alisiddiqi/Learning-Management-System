import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Students.css"
const API_HOST = "http://localhost:4000";
const STUDENT_API_URL = `${API_HOST}/students`;

function App (){
   const [data, setData]=useState([]);
   const fetchStudents = ()=>{
      fetch(`${STUDENT_API_URL}`)
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  useEffect(()=>{
      fetchStudents();
  },[]);

  return (
   <div className="container">
       <h1> Student List </h1>
       <table>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th className="age"> Age </th>
                   <th>Email address</th>
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
                     </tr>
                 ))
              }
           </tbody>
         </table>
      </div>
  );
}

export default App