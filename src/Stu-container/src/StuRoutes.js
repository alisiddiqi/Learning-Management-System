import React from "react";
import {Route, Switch } from "react-router-dom";
import StuHome from './StuHome';
import CoursePage from './Course_main';
import ContentSec from './Sections/ContentSec';
import CommunicationSec from './Sections/CommunicationSec';
import GradesSec from './Sections/GradesSec';
import DropboxSec from './Sections/DropboxSec';
import Schedule from "./Course_Comp/Schedule";

export default function StuRoutes() {
  return (
    <Switch>
        <Route exact path="/"> <StuHome /> </Route>
        <Route exact path="/Course_main"> <CoursePage /> </Route>
        <Route exact path="/Course_main/ContentSec"> <ContentSec /> </Route>
        <Route exact path="/Course_main/CommunicationSec"> <CommunicationSec /> </Route>
        <Route exact path="/Course_main/GradesSec"> <GradesSec /> </Route>
        <Route exact path= "/Course_main/DropboxSec"> <DropboxSec /> </Route>
        <Route exact path= "/Tools"> <Schedule /> </Route>
    </Switch>
  );
}