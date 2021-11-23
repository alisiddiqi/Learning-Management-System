import React from 'react';

function FileDownload(props) {
    const url = sessionStorage.getItem("url");
    const file = sessionStorage.getItem(props.downInfo.name);

    console.log(file);
    return (
        <div>
            <a href={url} download={file}>{props.downInfo.name}</a>
        </div>
    );
}

export default FileDownload;