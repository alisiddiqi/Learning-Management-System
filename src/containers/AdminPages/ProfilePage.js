import { withRouter } from "react-router";
import {useState,useEffect} from 'react'
import { Button, Form, Input } from "semantic-ui-react";
import Home from '../AdminHome';


function ProfilePage(props)
{
    const [courseID,setCourseID]=useState();
    var [studentid]=useState(null);
    const [firstName,setfirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [year,setYear]=useState('');
    const [major, setMajor]=useState('');
    var [data, setData]=useState([]);
    const [stuData,setStuData]=useState([]);
    const[stuCourses,setStuCourses]=useState([]);
    var [dupli]=useState([]);
   const fetchStudents = ()=>{
      fetch('/students/'+props.match.params.username)
      .then(res=>res.json())
      .then(json=>setData(json));
  }
  const fetchStuData=()=>{
      fetch('/students/'+props.match.params.username+'/stu')
      .then(res=>res.json())
      .then(json=>setStuData(json));
  }
  const fetchStuCourses=()=>{
    fetch('/students/'+props.match.params.username+'/courses')
    .then(res=>res.json())
    .then(json=>setStuCourses(json));
}
  useEffect(()=>{
      fetchStudents();
      fetchStuData();
      fetchStuCourses();
  },[]);

  const onEdit=({currentFirstName,currentLastName})=>{
    setfirstName(currentFirstName);
    setLastName(currentLastName);
}
const onEdit2=({currentMajor,currentYear})=>{
    setMajor(currentMajor);
    setYear(currentYear);
}
  return(
  <div className="container">
      <Home/>
    {
    data.map((item)=>( 
        <div>
        <h1 > Username: {item['username']}</h1>
        <button
        className={"btn-primary"}
        onClick={()=> onEdit({
            username: item['username'],
            currentFirstName: item['firstname'],
            currentLastName: item['lastname']
        })}
        >
        Set user defaults
        </button>
        </div>
    ))
  }
  {
    stuData.map((item)=>(  
        studentid=stuData[0]['studentID'],
        console.log(studentid),
        <div>
        <h1 > Major: {item['major']}</h1>
        <button
        className={"btn-primary"}
        onClick={()=> onEdit2({
            currentMajor: item['major'],
            currentYear: item['year']
        })}
        >
        Set student defaults
        </button>
        </div>
    ))
  }
  <br></br>
  {
      stuCourses.map((item)=>
      <div>
          <h1>Courses are: {item['courseid']} {item['name']}</h1>
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
        const response=await fetch('/students/'+props.match.params.username,{
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
    <Form class="feilds">
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
        const response=await fetch('/students/'+props.match.params.username+'/stu',{
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
        <Form.Field>
        <Input 
                id="major"
                placeholder={"Enter courseID"}
                onChange={e=>setCourseID(e.target.value)}/>
            </Form.Field>
            <Form.Field type="submit">
            <Button  onClick={async()=>{
                        
        const newStuToAdd={courseID,studentid};
        const response=await fetch('/students/'+props.match.params.username+'/courses',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStuToAdd)
        })
    }}>
        Add course
    </Button>
        </Form.Field><br/>
        <Form.Field>
        <Input 
                id="courseID"
                placeholder={"Enter courseID to delete"}
                onChange={e=>setCourseID(e.target.value)}/>
            </Form.Field>
            <Form.Field type="submit">
            <Button  onClick={async()=>{
        const newStuToAdd={courseID,studentid};
        const response=await fetch('/students/'+props.match.params.username+'/courses',{
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

export default withRouter(ProfilePage)