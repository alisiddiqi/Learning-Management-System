import React from 'react';

function FileDownload(props) {
    const url = sessionStorage.getItem("url");
    const file = sessionStorage.getItem(`${props.name}`);

    return (
        <div>
            <a href={url} download={file}>{props.name}</a>
        </div>
    );
}

export default FileDownload;