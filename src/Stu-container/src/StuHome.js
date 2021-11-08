import './HomePage.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Home_Comp/Banner";
import GenNav from "./Home_Comp/GenNav";
import Courses from "./Home_Comp/Courses";
import StuData from "./stu_db.json"

function StuHome() {
    return (
        <div className="home-page">
            <Banner type={StuData.Banner.platform} profile={StuData.Banner.profile} school={StuData.Banner.schoolName}
            />
            <GenNav studentNav={StuData.homeNav}/>
            <Courses courseInfo={StuData.courseData}/>
        </div>
    );
}

export default StuHome;