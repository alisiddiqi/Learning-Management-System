import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Students.css"
import { BrowserRouter } from 'react-router-dom';
import Home from '../AdminHome';

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
       <Home/>
       <h1 style={{alignContent: 'center'}}> Course List </h1>
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
                     console.log(item),
                    <tr key={item['courseid']}>
                     <td>{item['courseid']}</td>
                     <td>{item['name']}</td>
                     <td><div><a href={item['courseid']}>Send Evaluations</a></div>
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