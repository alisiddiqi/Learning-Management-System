import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";
import Banner from './Banner';
import GenNav from './GenNav';
import '../stu_main.css';

class StuProfile extends Component{
    render() {
        return (
            <div>
                <Banner bannerData={GenData.Banner} />
                <GenNav navData={GenData.insNav}/>
                <Container style={{textAlign: "center"}} fluid>
                    <h2 style={{margin: "20px"}}>{StuData.StudentData[0].first_name} {StuData.StudentData[0].last_name}</h2>
                    <Row style={{margin: "20px", padding: "10px"}}>
                        <Col><b>Username:</b><br/>{StuData.StudentData[0].username}</Col>
                        <Col><b>Role:</b><br/>{StuData.StudentData[0].role}</Col>
                        <Col><b>Date of Birth:</b><br/>{StuData.StudentData[0].dob}</Col>
                        <Col><b>Phone Number:</b><br/>{StuData.StudentData[0].phone}</Col>
                        <Col><b>Email:</b><br/>{StuData.StudentData[0].email}</Col>
                    </Row>
                    <Row className="enrolled">
                        <Col>
                            <h4><b>Enrolled Courses</b></h4>
                        </Col>
                        <Col>
                            {StuData.courseData.map((data) => <h5>{data.name}</h5>)}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default StuProfile;