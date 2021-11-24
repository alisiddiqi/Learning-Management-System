import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Students.css"
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App (){
   const [data, setData]=useState([]);
   const fetchCourses = ()=>{
      fetch('/courses/sendEvaluations/')
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  useEffect(()=>{
      fetchCourses();
  },[]);
  return (
   <div className="container">
       <h1 style={{alignContent: 'center'}}> Student List </h1>
       <BrowserRouter>
       <table>
           <thead>
               <tr>
                   <th>Course code</th>
                   <th> Course name</th>
                   <th>Evalutions</th>
               </tr>
           </thead>
           <tbody>
              {
                 data.map((item)=>(
                     console.log(item.length),
                    <tr key={item[0]}>
                     <td>{item[0]}</td>
                     <td>{item[1]}</td>
                     <td><div><a href={item[0]}>Send Evaluations</a></div>
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