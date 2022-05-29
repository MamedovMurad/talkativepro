import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, TypeOptions } from "react-toastify";
import agent from "../../Api/agent";
import TeacherSecondForm from "../teactherSecondForm";
import ButtonUI from "../UI/Button";
import InputUI from "../UI/Input";
import styles from "./index.module.css";
import Router from 'next/router'
import { UserContext } from "../../pages/_app";
import SweetAlertBody from "../UI/sweetAlert/body";
type ActivationCodeProps = {
  token: string;
  teacher: boolean;
};

const ActivationCode: React.FC<ActivationCodeProps> = ({ token, teacher }) => {
  const [crossSecondForm, setsetcrossSecondFormfirst] = useState(false);
  const [data, dispatch] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //function
  const onSubmit = async (data: any) => {
  
    try {
      const res = await agent.Auth.checkActivetion({ ...data, token });
      if (res && teacher) {
        setsetcrossSecondFormfirst(true);
      } else if(res&&!teacher){
        Router.push('/login')
        return  dispatch({type:'setModalActive', payload:<SweetAlertBody/>})
      }
    } catch (error) {
      return  toast("kod yanlışdır", { type: "error" as TypeOptions });
    }
  
  
  };
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
                <span>Kodu əldə etmədiniz? </span> <span>Yenidən göndər</span>
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
