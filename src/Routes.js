import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import GuestLogin from "./containers/GuestLogin";
import AdminLogin from "./containers/AdminLogin";
import AdminHome from "./containers/AdminHome";
import Student from './containers/AdminPages/Students';
import Instructor from "./containers/AdminPages/Instructor";
import StudentEdit from './containers/AdminPages/EditableStudent'
import InstructorEdit from './containers/AdminPages/editableInstructor'


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/guestlogin">
            <GuestLogin />
        </Route>
        <Route exact path="/adminlogin">
            <AdminLogin />
        </Route>
        <Route exact path ="/adminhome">
          <AdminHome/>
        </Route>
        <Route exact path = "/adminhome/student/view">
          <Student/>
        </Route>
        <Route exact path="/adminhome/student/edit">
          <StudentEdit></StudentEdit>
        </Route>
        <Route exact path ="/adminhome/teacher/view">
          <Instructor/>
         </Route>
         <Route exact path="/adminhome/teacher/edit">
           <InstructorEdit></InstructorEdit>
           </Route>
      <Route>
          <NotFound/>
      </Route>
    </Switch>
  );
}