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
import StuHome from './Stu-container/StuHome';
import CoursePage from './Stu-container/Course_main';
import ContentSec from './Stu-container/Sections/ContentSec';
import CommunicationSec from './Stu-container/Sections/CommunicationSec';
import GradesSec from './Stu-container/Sections/GradesSec';
import DropboxSec from './Stu-container/Sections/DropboxSec';
import Schedule from "./Stu-container/Course_Comp/Schedule";
import ProfilePage from "./containers/AdminPages/ProfilePage";

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
        <Route exact path="/StuHome"> <StuHome /> </Route>
        <Route exact path="/Course_main"> <CoursePage /> </Route>
        <Route exact path="/Course_main/ContentSec"> <ContentSec /> </Route>
        <Route exact path="/Course_main/CommunicationSec"> <CommunicationSec /> </Route>
        <Route exact path="/Course_main/GradesSec"> <GradesSec /> </Route>
        <Route exact path= "/Course_main/DropboxSec "> <DropboxSec /> </Route>
        <Route exact path= "/Tools"> <Schedule /> </Route>
        <Route exact path="/adminhome/student/:username"><ProfilePage/></Route>
      <Route>
          <NotFound/>
      </Route>
    </Switch>
  );
}