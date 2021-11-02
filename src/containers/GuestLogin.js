import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { useAppContext } from "../lib/contextLib";

export default function Login() {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userHasAuthenticated}=useAppContext();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  /*
  Handle onSubmit of Guest, rest logic is same as Login
  */
  function handleSubmit(event) {
    event.preventDefault();
    try{
      userHasAuthenticated(true);
      history.push("/guesthome")
  }catch (e){
    alert(e.message);
  }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}