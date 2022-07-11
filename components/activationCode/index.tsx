import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import agent from "../../Api/agent";
import TeacherSecondForm from "../teactherSecondForm";
import ButtonUI from "../UI/Button";
import InputUI from "../UI/Input";
import styles from "./index.module.css";
import Router from 'next/router'
import toast from 'react-hot-toast'
import { UserContext } from "../../pages/_app";
import SweetAlertBody from "../UI/sweetAlert/body";
import { setCookies } from 'cookies-next';
import { convertHMS } from "../../hooks/convertHMS";
type ActivationCodeProps = {
  token: string;
  teacher: boolean;
};

const ActivationCode: React.FC<ActivationCodeProps> = ({ token, teacher }) => {
  const [crossSecondForm, setsetcrossSecondFormfirst] = useState(false);
  const [data, dispatch] = useContext(UserContext);
  const [isblock, setisblock] = useState(120)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //function

  const saveLocale = (locale: any) => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      console.log(locale);
      const minute__second =
        (0.000694444444 / 60) * locale.data.tokenDurationInSeconds;
        setCookies("agent", locale.data.token);
      
   }
 
  };

  const onSubmit = async (data: any) => {
  
 
      const res = await agent.Auth.checkActivetion({ ...data, token });
      if (res && teacher) {
        setsetcrossSecondFormfirst(true);
        saveLocale(res)
      } else if(res&&!teacher){
       await Router.push('/login')
        dispatch({type:'setModalActive', payload:<SweetAlertBody/>})
        return
      }
   };

   useEffect(() => {
    let id = setInterval(() => {
      isblock>0&&  setisblock(isblock -1);
    }, 1000);
    return () => clearInterval(id);
  });






async function handleSendAgain(){
  if (isblock==0) {
    setisblock(120)
    const again = await agent.Auth.again({token:token})
    again&& toast.success('Yenidən göndərildi')
  }
}
  return (
    <>
      {crossSecondForm ? (
        <TeacherSecondForm />
      ) : (
        <section className={styles.activationcode}>
          <h5>Təsdiqləmə kodu</h5>
          <p>Emailinizə göndərilən şifrəni daxil edin</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputUI
              label="Təsdiq kodu"
              type="number"
              id={453432432452532}
              register={register}
              name="code"
            />

            <div className={styles.againsend}>
              <label>
                <span>Kodu əldə etmədiniz? </span>   <span onClick={handleSendAgain}>{isblock===0?'Yenidən göndər':convertHMS(isblock)}</span>  
              </label>
            </div>
            <ButtonUI text={"Təsdiqlə"} width="360px" height="56px" />
          </form>
        </section>
      )}
    </>
  );
};

export default ActivationCode;
