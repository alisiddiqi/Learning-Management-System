import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import "./Students.css"
import { NavLink } from 'react-router-dom';

function App (){
   const [data, setData]=useState([]);
   const fetchTeacher = ()=>{
      fetch('/teacher')
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  useEffect(()=>{
      fetchTeacher();
  },[]);

  return (
   <div className="container">
       <h1> Teacher List </h1>
       <table>
           <thead>
               <tr>
                   <th>First Name</th>
                   <th>Username</th>
                   <th>Profile </th>
               </tr>
           </thead>
           <tbody>
              {
                 data.map((item)=>(
                    <tr key={item[0]}>
                     <td>{item[1]}</td>
                     <td> {item[0]}</td>
                     <td><LinkContainer to="/students/profile">
                     <NavLink> Profile </NavLink>
                     </LinkContainer> </td>
                     </tr>
                 ))
              }
           </tbody>
         </table>
      </div>
  );
}

export default App