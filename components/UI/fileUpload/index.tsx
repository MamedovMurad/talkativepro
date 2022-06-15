import { useState } from "react";
import agent from "../../../Api/agent";
import { DownloadSVG } from "../../../svg/downloadSvg";
import styles from "./index.module.css";
type FileUploadProps = {
  file:any
};

const FileUpload: React.FC<FileUploadProps> = ({file}) => {
  const [fileName, setfileName] = useState("Cv-nizi buraya yükləyin");
  const fileUpload = async(param:any)=>{
    const filepath = param.value;
    const m = filepath.match(/([^\/\\]+)$/);
    const filename = m[1]||null;
    const formData = new FormData();
    formData.append("file",param.files[0]);
    const {data}:any = await agent.fileUpload_v(formData)
    setfileName(filename);
    data&&file(data)
  }
  return (
    <div className={styles.fileUpload}>
      <label htmlFor="file-upload">
      <span id="filename"><DownloadSVG/> {fileName}</span> <input accept="application/pdf" type="file" id="file-upload" onChange={(e)=>fileUpload(e.target)}/>
      </label>
    </div>
  );
};

export default FileUpload;
