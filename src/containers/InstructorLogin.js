import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { useAppContext } from "../lib/contextLib";

export default function Login() {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userHasAuthenticated}=useAppContext();
  const [isLoading,setIsLoading]=useState(false);
  const [data,setData]=useState([]);
  var [teacherid] =useState();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  /*
  Handle onSubmit of Instructor, rest logic is same as Login
  */
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
      const loginAuth=()=>{
        fetch('/InsLogin/'+email +'/'+password)
        .then(res=>res.json())
        .then(json=>setData(json));
      }
    loginAuth();
    setIsLoading(false);
  }
    if(data.length!==0){
      teacherid = data[0].teacherid;
      userHasAuthenticated(true);
      history.push('/InsHome/'+teacherid);
      sessionStorage.setItem("teacherID", teacherid);
    }else{
      userHasAuthenticated(false);
    }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="username" size="lg" controlId="text">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
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
        <LoaderButton className="Login-btn" block size="lg" type="submit" isLoading={isLoading} disabled={!validateForm()}>
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}