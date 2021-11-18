import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";


export const StudentForm=()=>{
    const [username,setUsername]=useState('');
    const [major,setmajor]=useState('');
    const [year, setyear]=useState('');
    const [studentID, setStudentID]=useState(0);
    return(
        <Form>
            <Form.Field>
            <Input value={username}
                id="username"
                placeholder={"Enter username"}
                onChange={e=>setUsername(e.target.value)}/>
            </Form.Field>
            <Form.Field> 
            <Input value={major}
                id="major"
                placeholder={"Enter major"}
                onChange={e=>setmajor(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Input value={year}
                id="year"
                placeholder={"Enter year"}
                onChange={e=>setyear(e.target.value)}/>
            </Form.Field>
            <Form.Field type="submit"> 
                <Button  onClick={async()=>{
                    const newStuToAdd={username,major};
                    const response=await fetch('/students/',{
                        method: "POST",
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newStuToAdd)
                    })
                }}>
                    Add
                </Button>
            </Form.Field>
        </Form>
    );
}