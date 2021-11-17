import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";


export const StudentForm=()=>{
    const [username,setUsername]=useState('');
    const [lastname,setLastName]=useState('');
    return(
        <Form>
            <Form.Field>
            <Input value={username}
                id="username"
                placeholder={"Enter username"}
                onChange={e=>setUsername(e.target.value)}/>
            </Form.Field>
            <Form.Field> 
            <Input value={lastname}
                id="lastname"
                placeholder={"Enter lastname"}
                onChange={e=>setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field> 
                <Button onClick={async()=>{
                    const newStuToAdd={username,lastname};
                    const response=await fetch('/students',{
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