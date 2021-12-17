import '../stu_main.css';
import React, { useState, useEffect } from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import GenData from "../gen_db.json";

function ContentSec(props) {
    const [Contentdata,setContentData]=useState([]); 
    const fetchDocuments = ()=>{
        fetch('/courses/'+sessionStorage.getItem("courseID")+'/content/')
        .then(res=>res.json())
        .then(json=>setContentData(json));
    }
    useEffect(()=>{
        fetchDocuments();
    },[]);

    return (
        <div style={{textAlign:'center'}} className="course-main">
            <Banner bannerData={GenData.Banner} user="Student" />
            <GenNav navData={GenData.stuNav} user="Student" />
            <div className="contentBody">
                <CourseBody docInfo={Contentdata} title="Content"/>
            </div>
        </div>
    );
}

export default ContentSec;