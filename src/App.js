import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import React, {useState,useEffect} from "react";
import Routes from "./Routes";
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { AppContext } from './lib/contextLib';


function App() {
  const [isAuthenticating, setIsAuthenticating]=useState(true);
  const [isAuthenticated, userHasAuthenticated]=useState(false);

  useEffect(()=>{
      onLoad();
  },[]);

  async function onLoad(){
    try{
      userHasAuthenticated(true);
    }catch(e){
      if(e==='No current user')
        alert(e);
    }
    setIsAuthenticating(false);
  }


  function handleLogout() {
    userHasAuthenticated(false);
  }


  return (
    !isAuthenticating &&(
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Learning Management System
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {isAuthenticated ? (
                              <LinkContainer to="/"> 
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                              </LinkContainer>

                            ) : (
                                  <>
                                    <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/guestlogin">
                                    <Nav.Link>Guest Login</Nav.Link>
                                    </LinkContainer>
                                  <LinkContainer to="/adminlogin">
                                    <Nav.Link>Admin Login</Nav.Link>
                                  </LinkContainer>
                                 </>
                                )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{isAuthenticated,userHasAuthenticated}}> 
      <Routes />
      </AppContext.Provider>
    </div>
    )
  );  
}
export default App;