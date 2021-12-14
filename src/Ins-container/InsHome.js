import '../Stu-container/stu_main.css';
import './teacher_main.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../Stu-container/Home_Comp/Banner";
import GenNav from "../Stu-container/Home_Comp/GenNav";
import InsCourse from "./InsComp/InsCourse";
import StuData from "../Stu-container/stu_db.json";
import GenData from "../Stu-container/gen_db.json";

class InsHome extends Component {
    render() {
        sessionStorage.setItem("teacherID", "10001");
        return (
            <div className="home-page">
                <Banner />
                <GenNav navData={GenData.insNav}/>
                
                <InsCourse courseInfo={StuData.courseData}/>
            </div>
        );
    }
}

export default InsHome;