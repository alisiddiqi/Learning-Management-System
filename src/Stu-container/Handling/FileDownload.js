import React from 'react';
import MyPDF from '../../Files/test.pdf';
import FileSaver from 'file-saver';
import {Button} from 'react-bootstrap';

function FileDownload(props) {
    const url = sessionStorage.getItem("url");
    const file = sessionStorage.getItem(`${props.uploaded}`);
    const downloadFile = (e) => {
        var blob = new Blob([localStorage.getItem('text')], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "testfile1.txt");
    }
    return (
        <div>
            <Button class="btn" onClick={downloadFile}> DOWNLOAD</Button>
            { console.log("IN FILE DONWLOAD" + localStorage.getItem('text'))}
        </div>
    );
}

export default FileDownload;