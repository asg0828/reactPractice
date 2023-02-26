import { useState, useEffect, useRef } from 'react'
import StyleFileUploader from './StyleFileUploader';

export default function FileUploader() {
  const [fileList, setFileList] = useState([]);
  const fileUploadRef = useRef();

  useEffect(() => {
    fileUploadRef.current.value = null;

    console.log("fileList: ", fileList);
  }, [fileList])

  const changeFile = (e) => {
    const addedFileList = Array.from(e.target.files);

    addedFileList.forEach((o, i) => {
      o.index = fileList.length + i;
    });

    setFileList(fileList.concat(addedFileList));
  }

  const openFileUpload = () => {
    fileUploadRef.current.click();
  }
  
  const dragOverFileUpload = (e) => {
    e.preventDefault();
  }

  const dropFileUpload = (e) => {
    e.preventDefault();

    console.log("e.dataTransfer.fileList", e.dataTransfer.files);

    const addedFileList = Array.from(e.dataTransfer.files);

    addedFileList.forEach((o, i) => {
      o.index = fileList.length + i;
    });

    setFileList(fileList.concat(addedFileList));
  }

  const removeFile = (index) => {
    setFileList(fileList.filter(o => o.index !== index));
  }

  return (
    <StyleFileUploader isFile={fileList.length}>
      <section
        id="upload-container"
        onClick={openFileUpload}
        onDragOver={dragOverFileUpload}
        onDrop={dropFileUpload}
      >
        <div id="upload-help-text">
          <label>이곳에 파일을 드랍하세요.</label>
          <input
            type="file"
            multiple
            onChange={changeFile}
            ref={fileUploadRef}
          />
        </div>

        <div
          id="upload-filelist"
          onClick={e => e.stopPropagation()}
        >
          <ul>
            {
              fileList.map((o, i) => {
                return (
                  <li key={i}>
                    <div>
                      <label>{`${o.name}(${o.size} Byte)`}</label>
                      <button onClick={() => removeFile(o.index)}>X</button>
                    </div>
                    <img src={"images/favicon.ico"} alt=""/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </StyleFileUploader>
  )
}
