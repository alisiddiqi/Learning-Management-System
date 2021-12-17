import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GenData from "../../Stu-container/gen_db.json";
import Banner from '../../Stu-container/Home_Comp/Banner';
import GenNav from '../../Stu-container/Home_Comp/GenNav';
import '../../Stu-container/stu_main.css';

function InsProfile() {
    const [profileData,setProfileData]=useState([]); 
    const [coursesData,setCoursesData]=useState([]);
    const fetchProfile = ()=>{
        fetch('/teacher/'+sessionStorage.getItem("teacherID")+'/profile/')
        .then(res=>res.json())
        .then(json=>setProfileData(json));
    }
    const fetchCourses = ()=>{
        fetch('/instructors/'+sessionStorage.getItem("teacherID")+'/courseList/')
        .then(res=>res.json())
        .then(json=>setCoursesData(json));
    }
    useEffect(()=>{
        fetchProfile();
        fetchCourses();
    },[]);

    return (
        <div>
        {
        profileData.map((item)=>(
        <div>
            <Banner />
            <GenNav navData={GenData.insNav} user="Teacher" />
            <Container style={{textAlign: "center"}} fluid>
                <h2 style={{margin: "20px"}}>(Prof.) {item.firstname} {item.lastname}</h2>
                <Row style={{margin: "20px", padding: "10px"}}>
                    <Col><b>Username:</b><br/>{item.username}</Col>
                    <Col><b>Role:</b><br/>{item.isTA}</Col>
                    <Col><b>Email:</b><br/>{item.email}</Col>
                </Row>
                <Row className="enrolled">
                    <Col>
                        <h4><b>Teaching Courses</b></h4>
                    </Col>
                    <Col>
                        {coursesData.map((data) => <h5>{data.courseid} - {data.name}</h5>)}
                    </Col>
                </Row>
            </Container>
        </div>
        ))
        }
        </div>
    );
}

export default InsProfile;