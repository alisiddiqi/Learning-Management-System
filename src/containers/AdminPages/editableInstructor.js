import React, { useEffect } from 'react'
import { useState } from 'react';
import "./editableInstructor.css"
const API_HOST = "http://localhost:5000";
const INSTRUCTOR_API_URL = `${API_HOST}/instructor`;


function App(){
    const [data, setData]=useState([]);
    const fetchInstructor = ()=>{
        fetch(`${INSTRUCTOR_API_URL}`)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchInstructor();
    },[]);
    const[inEditMode, setInEditMode]=useState({
        status: false,
        rowKey: null
    });

    
    const [firstName, setfirstName]=useState(null);
    const [lastName, setlastName]=useState(null);
    const [Insage, setInsage]=useState(null);
    const [Insemail, setInsemail]=useState(null);
    const [Courses, setCourses]=useState(null);

    const onEdit=({id,currentFirstName,currentLastName,currentAge,currentEmail})=>{
        setInEditMode({
            status: true,
            rowKey: id
        })
        setfirstName(currentFirstName);
        setlastName(currentLastName);
        setInsage(currentAge);
        setInsemail(currentEmail);
    }

    const updateStudentList=({id,newfirstname,newlanme,newage,newemail})=>{
        fetch(`${INSTRUCTOR_API_URL}/${id}`,{
            method: "PATCH",
            body: JSON.stringify({
                first_name: newfirstname,
                last_name: newlanme,
                age: newage,
                email: newemail
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8" 
            }
        })
        .then(response=>response.json())
        .then(json=> {
            onCancel();
            fetchInstructor();
        })
    }

    const onSave=({id,newFirstName,newLastName,newAge,newEmail})=>{
            updateStudentList({id: id,newfirstname: newFirstName,newlanme: newLastName,newage: newAge,newemail: newEmail});
    }
    const onCancel=()=>{
        setInEditMode({
            status: false,
            rowKey: null
        })
        setfirstName(null);
    }

    return (
        <div className="app-container">
            <h1> Instructor List </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th className="age"> Age </th>
                        <th>Email address</th>
                        <th> Courses </th>
                        <th className="edit">Edit Tab</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id} </td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={firstName}
                                                onChange={(event)=> setfirstName(event.target.value)}
                                            />
                                        ) : (
                                            item.first_name
                                        )
                                    }
                                </td>
                                <td>
                                {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={lastName}
                                                onChange={(event)=> setlastName(event.target.value)}
                                                />
                                        ) : (
                                            item.last_name
                                        )
                                    }
                                </td>
                                <td>
                                {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={Insage}
                                                onChange={(event)=> setInsage(event.target.value)}
                                                />
                                        ) : (
                                            item.age
                                        )
                                    }
                                </td>
                                <td>
                                {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={Insemail}
                                                onChange={(event)=> setInsage(event.target.value)}
                                                />
                                        ) : (
                                            item.email
                                        )
                                }
                                </td>
                                <td>
                                {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={Courses}
                                                onChange={(event)=> setCourses(event.target.value)}
                                                />
                                        ) : (
                                            item.courses
                                        )
                                }
                                </td>
                                <td> 
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-sucess"}
                                                    onClick={()=> {onSave({id: item.id, newFirstName:firstName,newLastName: lastName, newAge: Insage,newEmail: Insemail})}}
                                                >
                                                    Save
                                                </button>

                                                <button
                                                    className={"btn-secondary"}
                                                    style={{marginLeft: 8}}
                                                    onClick={()=>onCancel()}
                                                >
                                                    Cancel
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            <button 
                                                className={"btn-primary"}
                                                onClick={() => onEdit({id: item.id, 
                                                    currentFirstName: item.first_name,
                                                    currentLastName: item.last_name,
                                                    currentAge: item.age,
                                                    currentEmail: item.email})}
                                            >
                                                Edit
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;