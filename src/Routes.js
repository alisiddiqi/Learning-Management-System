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
import StuHome from './Stu-container/StuHome';
import CoursePage from './Stu-container/Course_main';
import ContentSec from './Stu-container/Sections/ContentSec';
import CommunicationSec from './Stu-container/Sections/CommunicationSec';
import GradesSec from './Stu-container/Sections/GradesSec';
import DropboxSec from './Stu-container/Sections/DropboxSec';
import ClassListSec from './Stu-container/Sections/ClassListSec';
import Schedule from "./Stu-container/Course_Comp/Schedule";
import ProfilePage from "./containers/AdminPages/ProfilePage";
import InsProfilePage from "./containers/AdminPages/InsProfilePage";
import EvalutionSend from "./containers/AdminPages/evaluations";
import EvaluationMethods from "./containers/AdminPages/evaluationMethods";
// import InstructorLogin from "./containers/InstructorLogin";
// import InsHome from "./Ins-container/InsHome";

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
        {/* <Route exact path="/instructorlogin">
            <InstructorLogin />
        </Route> */}
        <Route exact path ="/adminhome">
          <AdminHome/>
        </Route>
        <Route exact path = "/adminhome/student/view">
          <Student/>
        </Route>
        <Route exact path ="/adminhome/teacher/view">
          <Instructor/>
         </Route>
        <Route exact path="/StuHome"> <StuHome /> </Route>

        {/* <Route exact path="/InsHome"> <InsHome /> </Route> */}

        <Route exact path="/Course_main"> <CoursePage /> </Route>
        <Route exact path="/Course_main/ContentSec"> <ContentSec /> </Route>
        <Route exact path="/Course_main/CommunicationSec"> <CommunicationSec /> </Route>
        <Route exact path="/Course_main/GradesSec"> <GradesSec /> </Route>
        <Route exact path= "/Course_main/DropboxSec "> <DropboxSec /> </Route>
        <Route exact path= "/Tools"> <Schedule /> </Route>
        <Route exact path="/StuHome/Course_main"> <CoursePage /> </Route>
        <Route exact path="/StuHome/Course_main/Content"> <ContentSec /> </Route>
        <Route exact path="/StuHome/Course_main/Communication"> <CommunicationSec /> </Route>
        <Route exact path="/StuHome/Course_main/Grades"> <GradesSec /> </Route>
        <Route exact path="/StuHome/Course_main/Dropbox"> <DropboxSec /> </Route>
        <Route exact path="/StuHome/Course_main/ClassList"> <ClassListSec /> </Route>
        <Route exact path="/Tools"> <Schedule /> </Route>
        <Route exact path="/Emails"> <ClassListSec /> </Route>
        <Route exact path="/adminhome/student/:username"><ProfilePage/></Route>
        <Route exact path="/adminhome/teacher/:username"><InsProfilePage/></Route>
        <Route exact path="/adminhome/evaluations/send"><EvalutionSend/></Route>
        <Route exact path="/adminhome/evaluations/:courseID"><EvaluationMethods/></Route>
        <Route>
          <NotFound/>
      </Route>
    </Switch>
  );
}