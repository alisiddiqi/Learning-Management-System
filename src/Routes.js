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
import EvaluationSec from './Stu-container/Sections/EvaluationSec';
import DropboxSec from './Stu-container/Sections/DropboxSec';
import ClassListSec from './Stu-container/Sections/ClassListSec';
import StuProfile from './Stu-container/Home_Comp/StuProflie';
import InsHome from './Ins-container/InsHome';
import InsProfile from './Ins-container/InsComp/InsProfile';
import InsEvalPage from './Ins-container/InsComp/EvalPage';
import InsContentPage from './Ins-container/InsComp/ContentPage';
import InsClassList from './Ins-container/InsComp/ClassListPage';
import InsAssignment from './Ins-container/InsComp/AssignmentPage';
import Schedule from "./Stu-container/Course_Comp/Schedule";
import ProfilePage from "./containers/AdminPages/ProfilePage";
import InsProfilePage from "./containers/AdminPages/InsProfilePage";
import EvalutionSend from "./containers/AdminPages/evaluations";
import EvaluationMethods from "./containers/AdminPages/evaluationMethods";
import RecieveEvaluations from "./containers/AdminPages/recieveEvaluations";
// import InstructorLogin from "./containers/InstructorLogin";

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
        <Route exact path="/StuHome/"> <StuHome /> </Route>

        <Route exact path="/InsHome/"> <InsHome /> </Route>

        <Route exact path="/Course_main/:courseID"> <CoursePage /> </Route>
        <Route exact path="/Course_main/:courseID/Content"> <ContentSec /> </Route>
        <Route exact path="/Course_main/:courseID/Evaluation"> <EvaluationSec /> </Route>
        <Route exact path="/Course_main/:courseID/ClassList"> <ClassListSec /> </Route>
        <Route exact path="/Course_main/:courseID/Dropbox"> <DropboxSec /> </Route>
        <Route exact path="/StuHome/:courseID"> <CoursePage /> </Route>
        <Route exact path="/StuHome/Course_main/:courseID/Content"> <ContentSec /> </Route>
        <Route exact path="/StuHome/Course_main/:courseID/Evaluation"> <EvaluationSec /> </Route>
        <Route exact path="/StuHome/Course_main/:courseID/ClassList"> <ClassListSec /> </Route>
        <Route exact path="/StuHome/Course_main/:courseID/Dropbox"> <DropboxSec /> </Route>
        <Route exact path="/Emails"> <ClassListSec /> </Route>
        <Route exact path="/Tools"> <Schedule /> </Route>
        <Route exact path="/StuProfile"> <StuProfile /> </Route>
        <Route exact path="/InsHome/Content"> <InsContentPage /> </Route>
        <Route exact path="/InsHome/Evaluation"> <InsEvalPage /> </Route>
        <Route exact path="/InsHome/ClassList"> <InsClassList /> </Route>
        <Route exact path="/InsHome/Assignments"> <InsAssignment /> </Route>
        <Route exact path="/InsHome/Profile"> <InsProfile /> </Route>
        <Route exact path="/adminhome/student/:username"><ProfilePage/></Route>
        <Route exact path="/adminhome/teacher/:username"><InsProfilePage/></Route>
        <Route exact path="/adminhome/evaluations/send"><EvalutionSend/></Route>
        <Route exact path="/adminhome/evaluations/:courseID"><EvaluationMethods/></Route>
        <Route exact path="/adminhome/evaluations/recieve/:courseID"><RecieveEvaluations/></Route>
        <Route>
          <NotFound/>
      </Route>
    </Switch>
  );
}