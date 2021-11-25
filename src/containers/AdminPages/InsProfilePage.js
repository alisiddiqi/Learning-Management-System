import { withRouter } from "react-router";
import {useState,useEffect} from 'react'
import { Button, Form, Input } from "semantic-ui-react";

function InsProfile(props)
{
    const [courseID,setCourseID]=useState();
    var [teacherid]=useState(null);
    const [firstName,setfirstName]=useState('');
    const [lastName, setLastName]=useState('');
    var [data, setData]=useState([]);
    const [stuData,setStuData]=useState([]);
    const[stuCourses,setStuCourses]=useState([]);
    var [dupli]=useState([]);
   const fetchinstructors = ()=>{
      fetch('/instructors/'+props.match.params.username)
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  const fetchStuData=()=>{
      fetch('/instructors/'+props.match.params.username+'/ins')
      .then(res=>res.json())
      .then(json=>setStuData(json));
  }
  const fetchStuCourses=()=>{
    fetch('/instructors/'+props.match.params.username+'/courses')
    .then(res=>res.json())
    .then(json=>setStuCourses(json));
}
  useEffect(()=>{
      fetchinstructors();
      fetchStuData();
      fetchStuCourses();
  },[]);
  dupli=[].concat(...stuData);
  teacherid=dupli[0];
  const onEdit=({currentFirstName,currentLastName})=>{
    setfirstName(currentFirstName);
    setLastName(currentLastName);
}
  return(
  <div>
    {
    data.map((item)=>(  
        <div>
        <h1 > Username: {item[0]}</h1>
        <button
        className={"btn-primary"}
        onClick={()=> onEdit({
            username: item[0],
            currentFirstName: item[1],
            currentLastName: item[2]
        })}
        >
        Set user defaults
        </button>
        </div>
    ))
  }
  {
    stuData.map((item)=>(
        <div>
        <h1 > Role: {item[1]}</h1>
        {/* <button
        className={"btn-primary"}
        onClick={()=> onEdit2({
            currentMajor: item[1],
            currentYear: item[2]
        })}
        >
        Set student defaults
        </button> */}
        </div>
    ))
  }
  <br></br>
  {
      stuCourses.map((item)=>
      <div>
          <h1>Courses taught are : {item[1]} {item[2]}</h1>
      </div>
        )
  }
  <Form>
            <Form.Field> 
            <Input value={firstName}
            size="small"
                id="firstName"
                placeholder={"Enter firstName"}
                onChange={e=>setfirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Input value={lastName}
                id="lastName"
                placeholder={"Enter lastName"}
                onChange={e=>setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field type="submit">
                    <Button  onClick={async()=>{
        const newStuToAdd={firstName,lastName};
        const response=await fetch('/instructors/'+props.match.params.username,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStuToAdd)
        })
    }}>
        Edit user information
    </Button>
     </Form.Field>
        </Form>
    {/* <Form>
    <Form.Field>
            <Input value={major}
                id="major"
                placeholder={"Enter major"}
                onChange={e=>setMajor(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Input value={year}
                id="year"
                placeholder={"Enter year"}
                onChange={e=>setYear(e.target.value)}></Input>
            </Form.Field>
            <Form.Field type="submit">
                    <Button  onClick={async()=>{
        const newStuToAdd={major,year};
        const response=await fetch('/instructors/'+props.match.params.username+'/stu',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStuToAdd)
        })
    }}>
        Edit student fields
    </Button>
     </Form.Field>
    </Form> */}
    <Form>
        <Form.Field>
        <Input 
                id="major"
                placeholder={"Enter courseID"}
                onChange={e=>setCourseID(e.target.value)}/>
            </Form.Field>
            <Form.Field type="submit">
            <Button  onClick={async()=>{
        const newStuToAdd={courseID,teacherid};
        const response=await fetch('/instructors/'+props.match.params.username+'/courses',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStuToAdd)
        })
    }}>
        Add course
    </Button>
        </Form.Field>
        <Form.Field>
        <Input 
                id="courseID"
                placeholder={"Enter courseID to delete"}
                onChange={e=>setCourseID(e.target.value)}/>
            </Form.Field>
            <Form.Field type="submit">
            <Button  onClick={async()=>{
        const newStuToAdd={courseID,teacherid};
        const response=await fetch('/instructors/'+props.match.params.username+'/courses',{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStuToAdd)
        })
    }}>
        Remove course
    </Button>
        </Form.Field>
    </Form>
    </div>
  );
}

export default withRouter(InsProfile)