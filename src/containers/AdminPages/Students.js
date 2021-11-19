import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Students.css"
import { BrowserRouter, Link } from 'react-router-dom';

function App (){
   const [data, setData]=useState([]);
   const fetchStudents = ()=>{
      fetch('/students')
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  useEffect(()=>{
      fetchStudents();
  },[]);

  return (
   <div className="container">
       <h1 style={{alignContent: 'center'}}> Student List </h1>
       <BrowserRouter>
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
                     console.log(item.length),
                    <tr key={item[0]}>
                     <td>{item[1]}</td>
                     <td> {item[0]}</td>
                     <td><div><a href={item[0]}>Profile</a></div>
                      </td>
                     </tr>
                 ))
              }
           </tbody>
         </table>
         </BrowserRouter>
      </div>
  );
}

export default App