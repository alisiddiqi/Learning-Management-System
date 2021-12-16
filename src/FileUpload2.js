import React from 'react';
// import './FileUpload2.css';
import axios from "axios";
import FileSaver from "file-saver";


export default class FileUpload2 extends React.Component {
    constructor(props) {
      super(props)
      
      const defaultFileType = "text"; 
      this.fileNames = {
          json: "states.json",
        csv: "states.csv",
        text: "states.txt"
      }    

      this.state = {
        fileType: defaultFileType,
        fileDownloadUrl: null,
        status: "",
        content: null
      }

        this.changeFileType = this.changeFileType.bind(this);
        this.download = this.download.bind(this);
        this.upload = this.upload.bind(this);
        this.openFile = this.openFile.bind(this);
        this.saveStaticDataToFile = this.saveStaticDataToFile.bind(this);
    }
    
    changeFileType (event) {
      const value = event.target.value;
        this.setState({fileType: value});
    }
    
    download (event) {
      event.preventDefault();
      let output;
   if (this.state.fileType === "text"){
        output = this.state.content;
      } 

      const blob = new Blob([output]);
      const fileDownloadUrl = URL.createObjectURL(blob);
      this.setState ({fileDownloadUrl: fileDownloadUrl}, 
        () => {
          this.dofileDownload.click(); 
      })    
    }
   
    upload(event) {
      event.preventDefault();
      this.dofileUpload.click()
    }

    // saveStaticDataToFile() {
    //     var blob = new Blob(["Welcome to Websparrow.org."],
    //         { type: "text/plain;charset=utf-8" });
    //     FileSaver.saveAs(blob, "./pdf/static.txt");
    //     var text = "Text";
    //     var type = "text/plain;charset=utf-8";
    //     var name = "static.txt";
    //     var a = document.getElementById("a");
    //     var file = new Blob([text], {type: type});
    //     a.href = URL.createObjectURL(file);
    //     a.download = name;

    // }
    
    openFile(evt) {
        let status = []; 
        const fileObj = evt.target.files[0];
        const reader = new FileReader();
            
        let fileloaded = e => {
          const fileContents = e.target.result;          
          this.setState({content: fileContents})
          var x = localStorage.getItem("file_content");
          console.log(x);

        }
        
        fileloaded = fileloaded.bind(this);
        reader.onload = fileloaded;
        reader.readAsText(fileObj);  
        var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
        // this.saveStaticDataToFile();
    }

    
    render() {
      return (
        <div>
          <form>            
            <button onClick={this.download}>
              Download
            </button>

            <a className="hidden"
               download={this.fileNames[this.state.fileType]}
               href={this.state.fileDownloadUrl}
               ref={e=>this.dofileDownload = e}></a>
            
            <p><button onClick={this.upload}>
              Upload a file!
            </button>
            </p>

            <input type="file" className="hidden"
              multiple={false}
              accept=".txt,.text,text/plain"
              onChange={evt => this.openFile(evt)}
              ref={e=>this.dofileUpload = e}
            />
          </form>
         
          <pre className="status">{this.state.status}</pre>
        </div>
        )
    }
  }
