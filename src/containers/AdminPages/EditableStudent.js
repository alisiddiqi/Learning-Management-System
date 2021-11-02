import React, { useEffect } from 'react'
import { useState } from 'react';
import "./editableStudent.css"
import {nanoid} from 'nanoid'
const API_HOST = "http://localhost:4000";
const STUDENT_API_URL = `${API_HOST}/students`;

const App = () => {
    const [Students,setStudents]=useState([]);
    const[addFormData,setAddFormData]=useState({
        firstName: '',
        lastName: '',
        age:'',
        email: ''        
    })
    const handleAddFormChange=(event)=>{
        const userEnteredFirstName=event.target.getAttribute('name');
        const userEnteredNameValue=event.target.value;
        const newFormData={...addFormData};
        newFormData[userEnteredFirstName]=userEnteredNameValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit =(event)=>{
        const newStudent={
            id: nanoid(),
            firstName: addFormData.firstName,
            lastName: addFormData.lastName,
            age: addFormData.age,
            email: addFormData.email
        }
        const newStudents=[...Students,newStudent];
        fetch(`${STUDENT_API_URL}`,{
            method: "POST",
        }
        ).then(res=>res.json())
        .then(json=>setStudents(json));
        }
    const fetchStudents = ()=>{
        fetch(`${STUDENT_API_URL}`)
        .then(res=>res.json())
        .then(json=>setStudents(json));
    }
    useEffect(()=>{
        fetchStudents();
    },[]);

    return(
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> Age </th>
                        <th> Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((Student)=>(
                        <tr key={Student.id}>
                            <td>{Student.id}</td>
                            <td> { Student.first_name}</td>
                            <td> {Student.last_name}</td>
                            <td> {Student.age}</td>
                            <td>{Student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Add Student</h2>
            <form className="container" onSubmit={handleAddFormSubmit}>
                <input type="text"
                name="firstName"
                required="required"
                placeholder="Enter a new first name"onChange={handleAddFormChange}
                />
                <input type="text"
                name="lastName"
                required="required"
                placeholder="Enter a new last name"onChange={handleAddFormChange}/>
                <input type="text"
                name="age"
                required="required"
                placeholder="Enter a new age"onChange={handleAddFormChange}/>
                <input type="email"
                name="email"
                required="required"
                placeholder="Enter a new email"onChange={handleAddFormChange}/>
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}

export default App