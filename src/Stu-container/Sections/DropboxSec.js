import '../stu_main.css';
import React, {useState,useEffect} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";

function DropboxSec (props){
    const [data, setData]= useState([]);
    const fetchStudents = ()=>{
        fetch('/grades/'+sessionStorage.getItem('DROPBOX').substring(26,29)+'/'+sessionStorage.getItem('DROPBOX').substring(9,14))
        .then(res=>res.json())
        .then(json=>setData(json));
      }
      useEffect(()=>{
        fetchStudents();
      },[]);
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner bannerData={GenData.Banner} user="Student" />
                <GenNav navData={GenData.stuNav} user="Student" />
                <div className="contentBody">
                    <CourseBody dropboxInfo={data} title="Dropboxes"/>
                </div>
            </div>
        );
    
}

export default DropboxSec;