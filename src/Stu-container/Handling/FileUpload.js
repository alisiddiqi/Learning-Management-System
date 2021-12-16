import React, { useRef } from 'react';
import {Button} from 'react-bootstrap';
import FileSaver from "file-saver";

async function FileUpload(props) {
    const fileRef = useRef();
    // Try and upload to folder, then maybe use flask
    const handleChange = (e) => {
      const file = e.target.files[0];
      console.log(file);
      let read = new FileReader();
      read.readAsBinaryString(file);
      read.onloadend = function(){
        console.log("-- READING2 --" + read.result.toString());
        localStorage.setItem('text', read.result.toString());
        console.log("get file" + localStorage.getItem('text'));

        var blob = new Blob([localStorage.getItem('text')], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "testfile1.txt");
      }
  
    };
    
    return (
      <div>
        <Button onClick={() => fileRef.current.click()}>
          Upload
        </Button>
        <input
          ref={fileRef}
          onChange={handleChange}
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