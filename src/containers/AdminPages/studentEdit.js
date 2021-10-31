import React from 'react'
import { useState } from 'react';
const API_HOST = "http://localhost:8000";
const STUDENT_API_URL = `${API_HOST}/students`;

function App(){
    const [data, setData]=useState([]);
    const fetchStudents = ()=>{
        fetch(`${STUDENT_API_URL}`)
    }
    return (
        <div className="container">
            <h1> Student List </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;