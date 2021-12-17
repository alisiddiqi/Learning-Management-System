import '../stu_main.css';
import React, { useState, useEffect } from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import GenData from "../gen_db.json";

function ContentSec() {
    const [Ldata,setData]=useState([]); 
    const [Adata,setStuData]=useState([]);
    const fetchInstructors = ()=>{
        fetch('/students/'+sessionStorage.getItem("stuID")+'/courses/'+sessionStorage.getItem("courseID")+'/assignments')
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchInstructors();
        fetchStudents();
    },[]);
    const fetchStudents = ()=>{
        fetch('/courses/'+props.match.params.courseID+'/classList/students')
        .then(res=>res.json())
        .then(json=>setStuData(json));
    }

    return (
        <div style={{textAlign:'center'}} className="course-main">
            <Banner bannerData={GenData.Banner} user="Student" />
            <GenNav navData={GenData.stuNav} user="Student" />
            <div className="contentBody">
                <CourseBody lectureInfo={Ldata} docInfo={Adata} title="Content"/>
            </div>
        </div>
    );
}

export default ContentSec;