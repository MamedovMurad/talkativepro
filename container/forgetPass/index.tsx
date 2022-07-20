import { setCookies } from "cookies-next";
import Router from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import InputUI from "../../components/UI/Input";
import styles from './index.module.css'
const ForgetPass = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

const [numberOfForm, setfirnumberOfFormstForm] = useState(1);
const [param_value, setparam_value] = useState<string|null>(null);

async function onSubmitHandle(data:any){
    if (numberOfForm==1) {
        const res = await agent.Auth.passwordReset({email:data.email})
        if (res.data) {
            setfirnumberOfFormstForm(2) 
            setparam_value(res.data)
        }
         
    }else if(numberOfForm==2){
        const res = await agent.Auth.checkActivetion({code:data.code,token:param_value||''})
        if (res.data?.token) {
            setCookies('agent', res.data.token)
            setfirnumberOfFormstForm(3)
        }
    }else if(numberOfForm==3){
        const res = await agent.Auth.newPass({password:data.password})
        if (res.data) {
         await  Router.push('/login')
         toast.success('Şifrəniz bərpa olundu')
        }
    }

    
}
  return <div className={styles.forgetpass}>
<h4>Şifrənin bərpası</h4>
<p>Şifrənizi yeniləmək üçün emailinizi daxil edin. </p>

<form action="" onSubmit={handleSubmit(onSubmitHandle)}>
    {numberOfForm==1&&
        <InputUI label="Email" id={7893221} name="email" register={register} errors={errors} required={true}/>
    }
    
    {numberOfForm==2&&
    <InputUI label="Bərpa kodu" id={7893221} name="code" register={register} errors={errors} required={true}/>
    }
      {numberOfForm==3&&
    <InputUI label="Yeni şifrə" id={7893221} name="password" register={register} errors={errors} required={true} type="password"/>
    }
 <div style={{marginTop:'24px'}}>   <ButtonUI text={numberOfForm==1?"Göndər":'Təsdiqlə'} width="100%" height="56px"/></div>
</form>
  </div>;
};

export default ForgetPass;
