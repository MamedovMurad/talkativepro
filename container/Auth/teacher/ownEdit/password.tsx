import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import agent from "../../../../Api/agent";
import ButtonUI from "../../../../components/UI/Button";
import InputUI from "../../../../components/UI/Input";
import styles from './index.module.css'
type PasswordEditProps = {};

const PasswordEdit: React.FC<PasswordEditProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmitHandle(params:any) {
    try {
      const res = await agent.password.update(params)
toast.success('Şifrəniz yeniləndi')
    } catch (error) {
    }
   
  
    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmitHandle)} className={styles.user_private_form}>
        <InputUI width="100%" id={9075223} name="currentPassword" label="Əvvəlki şifrə" type="password"  register={register} required errors={errors}/>
        <InputUI width="100%" id={9075123} name="password" label="Yeni şifrə" type="password"  register={register} required errors={errors}/>
        <div className={styles.forgetPass}><span>Şifrənizi unutmusunuz?</span></div>
        <div style={{ marginTop: "15px" }}>
          <ButtonUI text="Yadda saxla" width="148px" height="44px" />
        </div>
      </form>
    </div>
  );
};

export default PasswordEdit;
