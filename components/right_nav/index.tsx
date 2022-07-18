import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { getCookie } from "react-use-cookie";
import agent from "../../Api/agent";
import { UserContext } from "../../pages/_app";
import ButtonUI from "../UI/Button";
import styles from "./index.module.css";

type forsate = {
  id?: number;
  value?: string | number;
  name?: string;
  label?: string;
  code: string;
};


const customStyles = {
  menuList: (styles: any) => ({
    ...styles,
    background: "#fff",
  }),
  option: (styles: any, { isFocused, isSelected }: any): any => ({
    ...styles,
    background: isFocused ? "#E6F9FC" : isSelected ? "#00C1DD" : undefined,
    zIndex: 1,
  }),
  multiValueLabel: (styles: any, { data }: any) => ({
    ...styles,
    background: "#E6F9FC",
    color: "#00C1DD",
  }),
  multiValueRemove: (styles: any, { data }: any) => ({
    ...styles,
    background: "#E6F9FC",
    color: "#00C1DD",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    borderRadius: "4px",
    display: "flex",
    width: 100,
    border: "1px solid #f6f6f6",
    height: "56px",
    aliginItems: "center",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
type RightNavProps = {};

const RightNav: React.FC<RightNavProps> = () => {
  const [language, setlanguage] = useState<forsate[]| null>(null);
  const [activeLang, setactiveLang] = useState({label:'AZ', value:'az'})
  const [data, dispatch] = useContext(UserContext);

  const check = () => !!getCookie("agent");


  const fetchApiLang = async () => {
    const res = await agent.Common.langList();
    res && setlanguage(res.data);
  };

  useEffect(() => {
    setactiveLang(localStorage?.getItem('lang')=='en'? {label:'EN', value:'en'}  :{label:'AZ', value:'az'})
    fetchApiLang();
  }, []);

  
  const CheckLoad = () => {
    
    if (check() && data.users.user_info?.uuid) {
      return (
        <>
          <div className={styles.langarea}>
          <Select
            options={language?.map((item: any) => ({
              label: item.code.toUpperCase(),
              value: item.code,
          
            }))}
            styles={customStyles}
            value={activeLang}
            onChange={(val:any)=>{setactiveLang(val); localStorage.setItem('lang',val.value)}}
          />
          </div>
          <Link href="/dashboard">
            <a>
              <ButtonUI
                width={"160px"}
                text={
                  data.users.user_info.firstName +
                  " " +
                  data.users.user_info.lastName
                }
              />
            </a>
          </Link>
        </>
      );
    }
    return (
      <>
        <div className={styles.langarea}>
          <Select
            options={language?.map((item: any) => ({
              label: item.code.toUpperCase(),
              value: item.code,
          
            }))
          }
            styles={customStyles}
            value={activeLang}
            onChange={(val:any)=>{setactiveLang(val); localStorage.setItem('lang',val.value)}}
          />
        </div>
  
        <Link href="/login">
          <a>Giriş</a>
        </Link>
        <Link href="/register">
          <a>
            <ButtonUI text="Qeydiyyat" />
          </a>
        </Link>
      </>
    );
  };
  return <div className={styles.rightNav}>{CheckLoad()}</div>;
};

export default RightNav;
