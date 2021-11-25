import '../stu_main.css';
import React, {useState,useEffect} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import GenData from "../gen_db.json";
import {useParams, withRouter} from 'react-router';

function ClassListSec (props){
    const [data,setData]=useState([]); 
    const [stuData,setStuData]=useState([]);
    const fetchInstructors = ()=>{
        fetch('/courses/'+props.match.params.courseID+'/classList/teachers')
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

export default withRouter(ClassListSec);