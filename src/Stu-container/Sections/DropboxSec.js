import '../stu_main.css';
import React, {Component} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";

class DropboxSec extends Component{
    render() {
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner bannerData={StuData.Banner} />
                <GenNav navData={StuData.stuNav} />
                <div className="contentBody">
                    <CourseBody dropboxInfo={StuData.DropboxData} title="Dropboxes"/>
                </div>
            </div>
        );
    }
}

export default DropboxSec;