import React, { useEffect } from 'react'
import { useState } from 'react';
import "./editableStudent.css"
const API_HOST = "http://localhost:4000";
const STUDENT_API_URL = `${API_HOST}/students`;


function App(){
    const [data, setData]=useState([]);
    const fetchStudents = ()=>{
        fetch(`${STUDENT_API_URL}`)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchStudents();
    },[]);
    const[inEditMode, setInEditMode]=useState({
        status: false,
        rowKey: null
    });

    const [newEnteredID, setNewEnteredID]=useState(null);
    const [newEnteredFirstName, setNewEnteredFirstName]=useState(null);
    const [newEnteredAge, setNewEnteredAge]=useState(null);
    const [newEnteredLastName, setNewEnteredLastName]=useState(null);
    const [newEnteredEmail, setNewEnteredEmail]=useState(null);
    const [firstName, setfirstName]=useState(null);
    const [lastName, setlastName]=useState(null);
    const [Stuage, setStuage]=useState(null);
    const [Stuemail, setStuemail]=useState(null);

    const onEdit=({id,currentFirstName,currentLastName,currentAge,currentEmail})=>{
        setInEditMode({
            status: true,
            rowKey: id
        })
        setfirstName(currentFirstName);
        setlastName(currentLastName);
        setStuage(currentAge);
        setStuemail(currentEmail);
    }

    const updateStudentList=({id,newfirstname,newlanme,newage,newemail})=>{
        fetch(`${STUDENT_API_URL}/${id}`,{
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
            fetchStudents();
        })
    }

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        
        fetch(`${STUDENT_API_URL}`,{
            method: "POST",
            body: JSON.stringify({
                id: newEnteredID,
                first_name: newEnteredFirstName,
                last_name: newEnteredLastName,
                age: newEnteredAge,
                email: newEnteredEmail
            }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8" 
            }
        }).then(response=>response.json())
        .then(json=> {
            onCancel();
            fetchStudents();
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
            <h1 className="header"> Student List </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th className="age"> Age </th>
                        <th>Email address</th>
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
                                            <input value={Stuage}
                                                onChange={(event)=> setStuage(event.target.value)}
                                                />
                                        ) : (
                                            item.age
                                        )
                                    }
                                </td>
                                <td>
                                {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={Stuemail}
                                                onChange={(event)=> setStuage(event.target.value)}
                                                />
                                        ) : (
                                            item.email
                                        )
                                }
                                </td>
                                <td> 
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-sucess"}
                                                    onClick={()=> {onSave({id: item.id, newFirstName:firstName,newLastName: lastName, newAge: Stuage,newEmail: Stuemail})}}
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
            <br/>
            <form className="inputForm" onSubmit={handleFormSubmit}>
            <input 
                    type="text"
                    className="takeUserInput"
                    name="enteredID"
                    required="required"
                    placeholder="Enter ID"
                    onChange={(event)=> setNewEnteredID(event.target.value)}             
                    />
            <input
                    type="text"
                    className="takeUserInput"
                    name="enteredFname"
                    required="required"
                    placeholder="Enter first Name"
                    onChange={(event)=> setNewEnteredFirstName(event.target.value)}              
                    />
             <input 
                    type="text"
                    className="takeUserInput"
                    name="enteredLname"
                    required="required"
                    placeholder="Enter last Name" 
                    onChange={(event)=> setNewEnteredLastName(event.target.value)}                    
                    />
             <input 
                    type="text"
                    className="takeUserInput"
                    name="enteredAge"
                    required="required"
                    placeholder="Age"   
                    onChange={(event)=> setNewEnteredAge(event.target.value)}                  
                    />
             <input 
                    type="text"
                    className="takeUserInput"
                    name="enteredEmail"
                    required="required"
                    placeholder="Enter email address"   
                    onChange={(event)=> setNewEnteredEmail(event.target.value)}                  
                    />
            <button>Add</button>
            </form>
            
        </div>
    );
}

export default App;