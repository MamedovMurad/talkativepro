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
import { getCookie } from "react-use-cookie";
import Router from "next/router";
import { setCookies } from 'cookies-next';
import ForgetPass from "../../container/forgetPass";

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
  const [forgetpass, setforgetpass] = useState(false);
  
  const handleChangeStatus = (param: string) => {
    setStudent(param);
  };

  const fetchApi = async () => {
    dispatch({ type: "setloader" });
    if (localStorage.getItem('teacher')) {
      const data = await agent.Auth.teacherMe()
      
      if (data.data) {
        Router.push('/dashboard')
      }
    return  dispatch({ type: "setUser", payload: data.data });
    }else{
      const  data = await agent.Auth.getMe();
      if (data.data) {
        Router.push('/dashboard')
      }
      return  dispatch({ type: "setUser", payload: data.data });
    }
  };
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
    setLoading(true);
    data.teacher = Student === "Müəllim";
    Student === "Müəllim" ? localStorage.setItem('teacher','true') : localStorage.removeItem('teacher')
    try {
      const token: any = await agent.Auth.login(data);
      if (token) {
        toast.success("Dashboard!");
        saveLocale(token);
        getCookie("agent") && fetchApi();
      }
    } catch (error) {
      
    }
    

      setLoading(false);
    
   

    console.log('15:51');
    

  };
  return (
    <div className="wrapper">
      <div className={styles.login}>
        <MapUI />
          <div className={styles.formDiv}>
            {
              forgetpass ? <ForgetPass/> :
              <>  <div className={styles.links}>
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
                width="100%"
              />
              <InputUI
              width="100%"
              type="password"
                label="Şifrə"
                id={134342932432432}
                register={register}
                name="password"
              />
              <div className={styles.passwordForget}>
                <label className={styles.labelForCheckbox} onClick={()=>setforgetpass(true)}>
                  <span>Şifrənizi unutmusunuz? </span>
                </label>
              </div>
              <ButtonUI
                text={loader ? "Yüklənir..." : "Giriş"}
                width="100%"
                height="56px"
              />
            </form></>
            }
         
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
