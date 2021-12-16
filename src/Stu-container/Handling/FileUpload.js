import React, { useRef,useState,useEffect } from 'react';
import {Button} from 'react-bootstrap';

function FileUpload() {
    const fileRef = useRef();
    // Try and upload to folder, then maybe use flask
    const HandleChange = (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      if(file!=null){
      console.log("creating a new thing")
      const url = URL.createObjectURL(file);
      localStorage.setItem(file.name,url.toString());
      document.getElementById("flag").style.display = "inline-block";
      }
    //  const [data, setData]=useState([]);
    // const fetchStudents = ()=>{
    //   fetch('/instructors/'+sessionStorage.getItem('teacherID')+'/courses')
    //   .then(res=>res.json())
    //   .then(json=>setData(json));
    // }
    // useEffect(()=>{
    //   console.log(hello);
    // },[]);

    };
    
    return (
      <div>
        <Button onClick={() => fileRef.current.click()}>
          Upload
        </Button>
        <input
          ref={fileRef}
          onChange={HandleChange}
          multiple={false}
          type="file"
          hidden
        />
        <p id="flag" style={{margin: "5px", display: "none"}}>Uploaded</p>
        <Button onClick={() => document.getElementById("flag").style.display = "none"}>
          Submit
        </Button>
      </div>
    );
}

export default FileUpload;