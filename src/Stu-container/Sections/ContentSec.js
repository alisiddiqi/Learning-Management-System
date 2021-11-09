import '../c_main.css';
import '../HomePage.css';
import React, {Component} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";
import content from '../work_db.json';

class ContentSec extends Component{
    render() {
        return (
            <div className="course-main">
                <Banner type={StuData.Banner.platform} profile={StuData.Banner.profile} school={StuData.Banner.schoolName}/>
                <GenNav studentNav={StuData.stuNav}/>
                <div className="contentBody">
                    <CourseBody contentInfo={content.courseWork.content} title="Course Work"/>
                </div>
            </div>
        );
    }
}

export default ContentSec;