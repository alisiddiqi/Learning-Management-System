import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import "./Students.css"

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
       <h1> Student List </h1>
    <Container>
       <StudentForm style={{outerWidth: 10}}>
           </StudentForm>
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
        </Container>
      </div>
  );
}

export default App