import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../../Stu-container/stu_db.json";
import GenData from "../../Stu-container/gen_db.json";
import Banner from '../../Stu-container/Home_Comp/Banner';
import GenNav from '../../Stu-container/Home_Comp/GenNav';
import PageBody from './PageBody';
import '../../Stu-container/stu_main.css';

function AssignmentPage (){
    const [data, setData]= useState([]);
    const fetchStudents = ()=>{
        fetch('/teacher/courses/'+sessionStorage.getItem('courseID')+'/dropbox')
        .then(res=>res.json())
        .then(json=>setData(json));
      }
      useEffect(()=>{
        fetchStudents();
      },[]);
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner />
                <GenNav navData={GenData.insNav} user="Teacher" />
                <div className="contentBody">
                    <PageBody gradeInfo={data} title="Assignments"/>
                </div>
            </div>
        );
}

export default AssignmentPage;