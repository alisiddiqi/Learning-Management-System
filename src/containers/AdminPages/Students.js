import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Students.css"
import { BrowserRouter } from 'react-router-dom';
import Home from '../AdminHome';

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
       <Home/>
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
                     console.log(item),
                    <tr key={item['username']}>
                     <td>{item['firstname']}</td>
                     <td> {item['username']}</td>
                     <td><div><a href={item['username']}>Profile</a></div>
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