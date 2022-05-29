import Link from "next/link";
import { useContext, useState } from "react";
import ButtonUI from "../../components/UI/Button";
import InputUI from "../../components/UI/Input";
import MapUI from "../../components/UI/map";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";
import { setItem } from "../../hooks/useCookie";
import agent from "../../Api/agent";
import {  toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { UserContext } from "../_app";
import { getCookie, setCookie } from "react-use-cookie";
import Router from "next/router";

type LoginProps = {};
const buttons = ["Müəllim", "Tələbə"];
const Login: React.FC<LoginProps> = () => {
  const [data, dispatch] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [Student, setStudent] = useState("Tələbə");
  const [loader, setLoading] = useState<null | boolean>(null);
  const handleChangeStatus = (param: string) => {
    setStudent(param);
  };

  const fetchApi = async () => {
    dispatch({ type: "setloader" });
    const data = await agent.Auth.getMe();
    if (data.data) {
      Router.push('/dashboard')
    }
    
    dispatch({ type: "setUser", payload: data.data });
  };
  const saveLocale = (locale: any) => {
    console.log(locale);
    const minute__second =
      (0.000694444444 / 60) * locale.data.tokenDurationInSeconds;
    setCookie("agent", locale.data.token, {
      days: minute__second,
      domain: "localhost",
      SameSite: "Lax",
      Secure: false,
    });
  };
  const onSubmit = async (data: any) => {
    setLoading(true);
    data.teacher = Student === "Müəllim";
    try {
      const token: any = await agent.Auth.login(data);
      if (token) {
        toast("You are welcome!", { type: "success" as TypeOptions });
        saveLocale(token);
        getCookie("agent") && fetchApi();
      }
    } catch (error) {
      toast("İstifadəçi tapılmadı !", { type: "error" as TypeOptions });
    }
    setLoading(false);
  };
  return (
    <div className="wrapper">
      <div className={styles.login}>
        <MapUI />
          <div className={styles.formDiv}>
            <div className={styles.links}>
              <Link href="/register">
                <a>Qeydiyyat</a>
              </Link>
              <Link href="/register">
                <a className={styles.active}>Giriş</a>
              </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputUI
                label="Email"
                id={323453453432432}
                register={register}
                name="userName"
              />
              <InputUI
                label="Şifrə"
                id={134342932432432}
                register={register}
                name="password"
              />
              <div className={styles.passwordForget}>
                <label className={styles.labelForCheckbox}>
                  <span>Şifrənizi unutmusunuz? </span>
                </label>
              </div>
              <ButtonUI
                text={loader ? "Yüklənir..." : "Giriş"}
                width="360px"
                height="56px"
              />
            </form>
          </div>
     
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

export default Login;
