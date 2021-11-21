import './stu_main.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Home_Comp/Banner";
import GenNav from "./Home_Comp/GenNav";
import Courses from "./Home_Comp/Courses";
import StuData from "./stu_db.json";
import GenData from "./gen_db.json";

function StuHome() {
    return (
        <div className="home-page">
            <Banner bannerData={GenData.Banner} />
            <GenNav navData={GenData.homeNav}/>
            <Courses courseInfo={StuData.courseData}/>
        </div>
    );
}

export default StuHome;