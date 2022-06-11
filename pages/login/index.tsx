import Link from "next/link";
import { useContext, useState } from "react";
import ButtonUI from "../../components/UI/Button";
import InputUI from "../../components/UI/Input";
import MapUI from "../../components/UI/map";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";
import { setItem } from "../../hooks/useCookie";
import agent from "../../Api/agent";
import toast from 'react-hot-toast'
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
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      console.log(locale);
      const minute__second =
        (0.000694444444 / 60) * locale.data.tokenDurationInSeconds;
      setCookie("agent", locale.data.token, {
        days: minute__second,
        domain:process.env.NODE_ENV === 'production'?`http://194.147.58.56:3000`:'localhost',
        SameSite: "Lax",
        Secure: true,
      });
      
   }
 
  };
  const onSubmit = async (data: any) => {
    setLoading(true);
    data.teacher = Student === "Müəllim";
    try {
      const token: any = await agent.Auth.login(data);
      if (token) {
        toast.success("Dashboard!");
        saveLocale(token);
        getCookie("agent") && fetchApi();
      }
    } catch (error) {
      toast.error("İstifadəçi tapılmadı !");
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
              type="password"
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
