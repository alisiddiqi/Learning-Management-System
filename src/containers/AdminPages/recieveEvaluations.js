import { withRouter } from "react-router";
import {useState,useEffect} from 'react'
import "./Students.css"

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
    console.log(data);
    data=[].concat(...data);
  return(
    <div>
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
                </tr>
            </thead>
        <tbody>
        {
            data.map((item)=>(
                <th>{item}</th>
                ))
        }
        </tbody>
        </table>
    </div>
  );
}

export default withRouter(RecieveEvaluations)