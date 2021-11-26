import '../stu_main.css';
import React, {useState,useEffect} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";
import {withRouter} from 'react-router';

function EvaluationSec (props){
    const [data,setData]=useState([]);
    const [teacherList,setTeacherList]=useState([]);
    const fetchInstructors = ()=>{
        fetch('/courses/'+props.match.params.courseID+'/classList/teachers')
        .then(res=>res.json())
        .then(json=>setTeacherList(json));
    }
    const fetchStudents = ()=>{
        fetch('/courses/sendEvaluations/'+props.match.params.courseID)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchStudents();
        fetchInstructors();
    },[]);
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner bannerData={GenData.Banner} />
                <GenNav navData={GenData.stuNav} />
                <div className="contentBody">
                    <CourseBody evalInfo={StuData.EvaluationData} teacherInfo={teacherList} data={data} title="Evaluations"/>
                </div>
            </div>
        );
    
}

export default withRouter(EvaluationSec);