import { withRouter } from "react-router";
import {useState,useEffect} from 'react'
import "./Students.css"
import Home from '../AdminHome';
import { Button } from "react-bootstrap";

function RecieveEvaluations(props)
{
    var [data,setData]=useState([]);
    const fetchinstructors = ()=>{
        fetch('/courses/recieveEvaluations/'+props.match.params.courseID)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchinstructors();
    },[]);
  return(
    <div>
        <Home/>
        <table>
            <thead>
                <tr>
                    <th>Teacher ID</th>     
                    <th>Student ID</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Q4</th>
                    <th>Q5</th>
                    <th>Q6</th>
                    <th>Q7</th>
                    <th>Q8</th>
                    <th>Q9</th>
                    <th>Q10</th>
                    <th>Comments</th>
                </tr>
            </thead>
        <tbody>
        {
            data.map((item)=>(
                console.log(item),
                <tr key={item['teacherid']}>
                <td>{item['teacherid']}</td>
                <td>{item['studentid']}</td>
                <td>{item['Q1']}</td>
                <td>{item['Q2']}</td>
                <td>{item['Q3']}</td>
                <td>{item['Q4']}</td>
                <td>{item['Q5']}</td>
                <td>{item['Q6']}</td>
                <td>{item['Q7']}</td>
                <td>{item['Q8']}</td>
                <td>{item['Q9']}</td>
                <td>{item['Q10']}</td>
                <td>{item['comment']}</td>
                </tr>
                ))
        }
        </tbody>
        </table>
        <Button href={"bestTeacher/"+props.match.params.courseID}>
            Get Best Teacher
        </Button>
        <Button href={"worstTeacher/"+props.match.params.courseID}>
            Get Worst Teacher
        </Button>
    </div>
  );
}

export default withRouter(RecieveEvaluations)