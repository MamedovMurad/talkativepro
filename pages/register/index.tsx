import Link from "next/link";
import { useState } from "react";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import InputUI from "../../components/UI/Input";
import MapUI from "../../components/UI/map";
import styles from "./../login/index.module.css";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
import ActivationCode from "../../components/activationCode";
type RegisterProps = {};

const buttons = ["Müəllim", "Tələbə"];
const Register: React.FC<RegisterProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const [Student, setStudent] = useState("Tələbə");
  const [getToken, SetGetToken] = useState<null | string>(null);
  const handleChangeStatus = (param: string) => {
    setStudent(param);
  };
  const onSubmitHandle = async (data: any) => {
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$') 
    if (!regex.test(data.password)) {
      setError('password',{ type: 'custom', message: 'custom message' })
      return toast.error('Şifrə kiçik, böyük, simvol və rəqəmdən ibarət olmalıdır')
    }
      data.surname = await data.name?.split(" ")[1];
      data.name = await data.name?.split(" ")[0];
      if (!data.surname) {
        return toast.error("Soyadı daxil edin!");
      }
      const stud = await agent.Auth.register({ ...data, teacher: Student==='Müəllim' });
      stud&&SetGetToken(stud.data)
    
  };
  return (
    <div className="wrapper">
      <div className={styles.login}>
        <MapUI />


        {getToken ? (
          <ActivationCode token={getToken} teacher={Student==='Müəllim'}/>
        ) : (
          <div className={styles.formDiv}>
            <div className={styles.links}>
              <Link href="/register">
                <a className={styles.active}>Qeydiyyat</a>
              </Link>
              <Link href="/login">
                <a>Giriş</a>
              </Link>
            </div>
          
              <form action="" onSubmit={handleSubmit(onSubmitHandle)}>
                <InputUI
                  label="Ad/ Soyad"
                  id={1932432432}
                  name="name"
                  register={register}
                  errors={errors}
                />
                <InputUI
                  label="Email"
                  id={323453453432432}
                  name="email"
                  register={register}
                  errors={errors}
                />
                <InputUI
                  label="Şifrə"
                  id={134342932432432}
                  name="password"
                  register={register}
                  type="password"
                  errors={errors}
                />

                <div className={styles.accesArea}>
                  <input type="checkbox" id="chekcboxeslogin" {...register('access',{required:true})}/>
                  <label
                    htmlFor="chekcboxeslogin"
                    className={errors.access?styles.accessInvalid : styles.labelForCheckbox}
                  >
                    <span>Məxfilik Siyasəti </span> və
                    <span>İstifadə Şərtləri</span> ilə razılaşıram
                  </label>
                </div>
                <ButtonUI
                  text={Student === "Tələbə" ? "Qeydiyyatdan keç" : "Növbəti"}
                  width="360px"
                  height="56px"
                />
              </form>
        
          </div>
        )}
      </div>
      <div className={styles.StudentTeacher}>
        {buttons.map((item) => (
          <button
            className={item === Student ? styles.activeChE : styles.null}
            key={item}
            onClick={() => handleChangeStatus(item)}
          >
            {item}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Register;
