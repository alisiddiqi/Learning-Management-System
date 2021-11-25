import '../stu_main.css';
import React, {useState,useEffect} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";

function ClassListSec (){
    const [data,setData]=useState([]); 
    const [stuData,setStuData]=useState([]);
    const fetchInstructors = ()=>{
        fetch('/courses/457/classList/teachers')
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchInstructors();
        fetchStudents();
    },[]);
    const fetchStudents = ()=>{
        fetch('/courses/457/classList/students')
        .then(res=>res.json())
        .then(json=>setStuData(json));
    }

     {
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner bannerData={GenData.Banner} />
                <GenNav navData={GenData.stuNav}/>
                <div className="contentBody">
                    <CourseBody teacherInfo={data} studentInfo={stuData} title="Emails"/>
                </div>
            </div>
        );
    }
}

export default ClassListSec;