import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";
import Banner from './Banner';
import GenNav from './GenNav';
import '../stu_main.css';

function StuProfile() {
    const [profileData,setProfileData]=useState([]); 
    const [coursesData,setCoursesData]=useState([]);
    const fetchProfile = ()=>{
        fetch('/students/'+sessionStorage.getItem("stuID")+'/profile')
        .then(res=>res.json())
        .then(json=>setProfileData(json));
    }
    const fetchCourses = ()=>{
        fetch('/students/'+sessionStorage.getItem("stuID")+'/courselist')
        .then(res=>res.json())
        .then(json=>setCoursesData(json));
    }
    useEffect(()=>{
        fetchProfile();
        fetchCourses();
    },[]);

    return (
        <div>
            <Banner bannerData={GenData.Banner} user="Student" />
            <GenNav navData={GenData.homeNav} />
            <Container style={{textAlign: "center"}} fluid>
                <h2 style={{margin: "20px"}}>{profileData.firstname} {profileData.lastname}</h2>
                <Row style={{margin: "20px", padding: "10px"}}>
                    <Col><b>Username:</b><br/>{profileData.username}</Col>
                    <Col><b>Role:</b><br/>Student</Col>
                    <Col><b>Email:</b><br/>{profileData.email}</Col>
                </Row>
                <Row className="enrolled">
                    <Col>
                        <h4><b>Enrolled Courses</b></h4>
                    </Col>
                    <Col>
                        {StuData.coursesData.map((data) => <h5>{data.courseid} - {data.name}</h5>)}
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default StuProfile;