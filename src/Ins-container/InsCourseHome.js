import '../Stu-container/stu_main.css';
import './teacher_main.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../Stu-container/Home_Comp/Banner";
import GenNav from "../Stu-container/Home_Comp/GenNav";
import InsCourse from "./InsComp/InsCourse";
import StuData from "../Stu-container/stu_db.json";
import GenData from "../Stu-container/gen_db.json";

function InsCourseHome(props) {
    const [data, setData]=useState([]);
    const fetchStudents = ()=>{
      fetch('')
      .then(res=>res.json())
      .then(json=>setData(json));
    }
    useEffect(()=>{
      fetchStudents();
    },[]);
    return (
        <div className="home-page">
            <Banner />
            <GenNav navData={GenData.insNav} user="Teacher"/>
            <InsCourse courseInfo={StuData.courseData}/>
        </div>
    );
}

export default InsCourseHome;