import {useState,useEffect} from 'react'
import { withRouter } from 'react-router';

function WorstTeacher(props){
    const [data,setData]=useState([]);
    const fetchinstructors = ()=>{
        fetch('/worstTeacher/'+props.match.params.courseID)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchinstructors();
    },[]);
    return(
        <h1>The worst Teacher is {data}</h1>
    );
}

export default withRouter(WorstTeacher)