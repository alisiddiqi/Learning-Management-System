import {useState,useEffect} from 'react'
import { withRouter } from 'react-router';

function WorstTeacher(props){
    return(
        <h1>THis is in worse with courseid {props.match.params.courseID}</h1>
    );
}

export default withRouter(WorstTeacher)