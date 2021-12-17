import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "./components/LoaderButton";
import "./Login.css";
import { useAppContext } from "../lib/contextLib";
import { useHistory } from "react-router-dom";
import {onError} from "../lib/errorLib";


export default function Login() {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userHasAuthenticated}=useAppContext();
  const [isLoading,setIsLoading]=useState(false);
  const [data,setData] = useState([]);
  var studentID =0;


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

//Handle onSubmit for Admin Login and, rest is the same as Login

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
      const loginAuth=()=>{
        fetch('/AdminLogin/'+email+'/'+password)
        .then(res=>res.json())
        .then(json=>setData(json));
      }
    loginAuth();
    setIsLoading(false);
  }

  if(data.length!==0){
    studentID = data[0].studentID;
    userHasAuthenticated(true);
    history.push('/AdminHome/'+studentID);
    sessionStorage.setItem("AdminId", studentID);
  }else{
    userHasAuthenticated(false);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="username" size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="password" size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <LoaderButton
          className="Login-btn"
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
        Login
        </LoaderButton>
      </Form>
    </div>
  );
}
