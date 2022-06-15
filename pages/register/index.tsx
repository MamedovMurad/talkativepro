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
    formState: { errors },
  } = useForm();
  const [Student, setStudent] = useState("Tələbə");
  const [getToken, SetGetToken] = useState<null | string>(null);
  const handleChangeStatus = (param: string) => {
    setStudent(param);
  };
  const onSubmitHandle = async (data: any) => {
    
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
                />
                <InputUI
                  label="Email"
                  id={323453453432432}
                  name="email"
                  register={register}
                />
                <InputUI
                  label="Şifrə"
                  id={134342932432432}
                  name="password"
                  register={register}
                />

                <div className={styles.accesArea}>
                  <input type="checkbox" id="chekcboxeslogin" />
                  <label
                    htmlFor="chekcboxeslogin"
                    className={styles.labelForCheckbox}
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
