import Router  from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import FileUpload from "../../components/UI/fileUpload";
import InputUI from "../../components/UI/Input";
import styles from './index.module.css'
interface IformDash{

    children:any
 
}
const FormDash = ({children }:IformDash) => {
  return <div className={styles.formdash}>

{
    children
}


  </div>;
};

export default FormDash;


export function FormCertificate({callback}:any){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [file, setfile] = useState<string>('');
  async function Addcertificate(){
    if (file) {

      const res = await agent.teacher.certifatePost({fileName:file})
      res && toast.success('Sertifikat əlavə edildi')
      setfile('')
      callback()
    }else{
      toast.error('Fayl əlavə edin')
    }
    
  }

  return (
    
    
<form action="" onSubmit={handleSubmit(Addcertificate)}>
<FileUpload text={'Sertifikat əlavə edin'} file={setfile}/>
<div className={styles.buttonarea}><ButtonUI text="Əlavə et" /></div>
</form>
 
  )
}

export function FormvideoLink({callback}:any){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // async function Addcertificate(){
   

  //     const res = await agent.teacher.certifatePost({fileName:file})
  //     res && toast.success('Video əlavə edildi')
      
  //     callback()
  //   }else{
  //     toast.error('Fayl əlavə edin')
  //   }
    
  // }

  return (
    
    
<form action="" >

<div className={styles.buttonarea}><ButtonUI text="Əlavə et" /></div>
</form>
 
  )
}