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




  function convertHMS(value:any) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours:number|string  = Math.floor(sec / 3600); // get hours
    let minutes:number|string = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds:string|number = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
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
