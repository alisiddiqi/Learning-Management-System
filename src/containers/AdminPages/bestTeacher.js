import {useState,useEffect} from 'react'
import { withRouter } from 'react-router';

function BestTeacher(props){
    const [data,setData]=useState([]);
    const fetchinstructors = ()=>{
        fetch('/bestTeacher/'+props.match.params.courseID)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchinstructors();
    },[]);
    return(
        <h1>The best Teacher is {data}</h1>
    );
}

export default withRouter(BestTeacher)