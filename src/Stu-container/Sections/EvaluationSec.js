import '../stu_main.css';
import React, {Component} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";

class EvaluationSec extends Component{

    render() {
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner bannerData={GenData.Banner} />
                <GenNav navData={GenData.stuNav}/>
                <div className="contentBody">
                    <CourseBody evalInfo={StuData.EvaluationData} teacherInfo={StuData.Teachers} title="Evaluations"/>
                </div>
            </div>
        );
    }
}

export default EvaluationSec;