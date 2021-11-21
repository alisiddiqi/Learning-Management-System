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


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

//Handle onSubmit for Admin Login and, rest is the same as Login

  function handleSubmit(event) {
    event.preventDefault();
    try{
      userHasAuthenticated(true);
      history.push('/adminhome');
  }catch (e){
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="username" size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
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
          Admin Login
        </LoaderButton>
      </Form>
    </div>
  );
}
