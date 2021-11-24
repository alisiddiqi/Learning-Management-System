import React, { useRef } from 'react';
import {Button} from 'react-bootstrap';

function FileUpload(props) {
    const fileRef = useRef();
  
    const handleChange = (e) => {
      const file = e.target.files[0];
      sessionStorage.setItem("file_content", file);
      sessionStorage.setItem(props.name, file.name);
      const url = URL.createObjectURL(file);
      sessionStorage.setItem("url", url);
      document.getElementById("flag").style.display = "inline-block";

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
        <p id="flag" style={{margin: "5px", display: "none"}}>Submitted</p>
      </div>
    );
}

export default FileUpload;