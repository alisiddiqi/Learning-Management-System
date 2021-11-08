import React from "react";
import {Route, Switch } from "react-router-dom";
import StuHome from './StuHome';
import CoursePage from './Course_main';
import ContentSec from './Sections/ContentSec';
import CommunicationSec from './Sections/CommunicationSec';
import GradesSec from './Sections/GradesSec';
import DropboxSec from './Sections/GradesSec';
import Schedule from "./Course_Comp/Schedule";

export default function StuRoutes() {
  return (
    <Switch>
        <Route exact path="/StuHome" component={StuHome} />
        <Route exact path="/Course_main" component={CoursePage} />
        <Route exact path="/Course_main/ContentSec" component={ContentSec} />
        <Route exact path="/Course_main/CommunicationSec" component={CommunicationSec} />
        <Route exact path="/Course_main/GradesSec" component={GradesSec} />
        <Route exact path= "/Course_main/DropboxSec" component={DropboxSec} />
        <Route exact path= "/Tools" element={Schedule} />
    </Switch>
  );
}