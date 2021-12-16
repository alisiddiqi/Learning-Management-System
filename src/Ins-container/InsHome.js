import '../Stu-container/stu_main.css';
import './teacher_main.css';
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../Stu-container/Home_Comp/Banner";
import Courses from "../Stu-container/Home_Comp/Courses";

function InsHome() {
    const [data, setData]=useState([]);
    const fetchStudents = ()=>{
      fetch('/students/KaiStudent/courselist')
      .then(res=>res.json())
      .then(json=>setData(json));
    }
    useEffect(()=>{
      fetchStudents();
    },[]);

    return (
        <div className="home-page">
            <Banner />
            
            <Courses courseInfo={data} user="Teach" />
        </div>
    );
}

export default InsHome;