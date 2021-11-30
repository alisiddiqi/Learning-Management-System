import React, {Component} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../../Stu-container/stu_db.json";
import GenData from "../../Stu-container/gen_db.json";
import Banner from '../../Stu-container/Home_Comp/Banner';
import GenNav from '../../Stu-container/Home_Comp/GenNav';
import PageBody from './PageBody';
import '../../Stu-container/stu_main.css';

class EvalPage extends Component{
    render() {
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner />
                <GenNav navData={GenData.insNav} />
                <div className="contentBody">
                    <PageBody evalInfo={StuData.EvaluationData} studentInfo={StuData.StudentData} title="Evaluations" />
                </div>
            </div>
        );
    }
}

export default EvalPage;