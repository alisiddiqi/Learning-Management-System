import './stu_main.css';
import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Home_Comp/Banner";
import GenNav from "./Home_Comp/GenNav";
import Courses from "./Home_Comp/Courses";
import GenData from "./gen_db.json";

function StuHome() {
    const h = sessionStorage.getItem("stuID");
    const [data, setData]=useState([]);
    const fetchStudents = ()=>{
      fetch('/students/KaiStudent/courselist')
      .then(res=>res.json())
      .then(json=>setData(json));
    }
    useEffect(()=>{
      fetchStudents();
    },[]);

    console.log(data);
    return (
        <div className="home-page">
            <Banner bannerData={GenData.Banner} user="Student"/>
            <GenNav navData={GenData.homeNav} home={h}/>
            <Courses courseInfo={data}/>
        </div>
    );
}

export default StuHome;