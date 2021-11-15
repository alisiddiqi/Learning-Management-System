import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

import "./Students.css"
import { NavLink } from 'react-router-dom';

function App (){
   const [data, setData]=useState([]);
   const fetchCourse = ()=>{
      fetch('/course')
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  useEffect(()=>{
      fetchCourse();
  },[]);

  return (
   <div className="container">
       <h1> Course List </h1>
       <table>
           <thead>
               <tr>
                   <th>Course Name</th>
                   <th>Instructor </th>
                   <th>Students Enrolled </th>
               </tr>
           </thead>
           <tbody>
              {
                 data.map((item)=>(
                    <tr key={item[0]}>
                     <td>{item[1]}</td>
                     <td> {//Will prolly have to fetch using Flask
                     }</td>
                     <td><LinkContainer to="/students/enrolled">
                     <NavLink> Students Enrolled </NavLink>
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