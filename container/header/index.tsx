import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import { LogoSvg } from "../../svg/Logo";
import Nav from "../nav";
import styles from "./index.module.css";
import { nav } from "../../Model/utils/nav";
import ReactSelect from "../../components/UI/Select/react-select";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import { ImeModel, ITeacher } from "../../Model/DTO";
import { IconSVG } from "../../svg/userSvg";
import { GlobosSvg } from "../../svg/globosSvg";
import MobileDropDOwn from "../../components/UI/dropDown/mobileDropDown";
import { ArrowSvg } from "../../svg/ArrowSVG";
import { CloseSVG } from "../../svg/closeSVG";
import { UnionSvg } from "../../svg/unionSVG";
import { HeadphoneSVG } from "../../svg/headphoneSVG";
import Router from "next/router";
import { UserIcon2 } from "../../svg/usericon2";
import { UserContext } from "../../pages/_app";
import { LogoutSVG } from "../../svg/logout";
import { getCookie, setCookie } from "react-use-cookie";

type HeaderProps = {
  user: ImeModel | ITeacher | null;
};
type forsate = {
  id?: number;
  value?: string | number;
  name?: string;
  label?: string;
  code: string;
};
const Header: React.FC<HeaderProps> = ({ user }) => {
  const [dropActive, setdropActive] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [color, setcolor] = useState("");
  const [language, setlanguage] = useState<forsate[] | null>(null);
  const [activeLang, setactiveLang] = useState({ label: "AZ", value: "az" });
  const responsive = useResponsivenenessAdjuster(920);
  const [data, dispatch] = useContext(UserContext);
  const [activeuserDrop, setactiveuserDrop] = useState(false);

  const check = () => !!getCookie("agent");
  const changeBackground = () => {
    if (window.scrollY >= 26) {
      setcolor("active");
    } else {
      setcolor("");
    }
  };

  const fetchApiLang = async () => {
    const res = await agent.Common.langList();
    res && setlanguage(res.data);
  };

  function setActiveLangf(val: { label: string; value: string }) {
    console.log(val, "vall");

    localStorage.setItem("lang", val.value);
    setactiveLang(val);
  }
  useEffect(() => {
    setactiveLang(
      localStorage?.getItem("lang") == "en"
        ? { label: "EN", value: "en" }
        : { label: "AZ", value: "az" }
    );
    responsive && fetchApiLang();
  }, [responsive]);

  let entity = [
    { title: "Profilə keç", link: "#" },
    { title: "Redaktə et", link: "/#" },
    { title: "Çıxış", link: "/#" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <div className={styles.mobileTop}>
        <a href="tel:+994775784074">
          <HeadphoneSVG /> <span>call</span>
        </a>
        {check() ? (
          <MobileDropDOwn
            CB={setdropActive}
            entity={entity}
            element={
              <>
                <span>
                  <IconSVG />
                </span>
                <i style={{ transform: "translateY(5px)" }}>
                  <ArrowSvg width={"19px"} height="14px" color="white" />
                </i>
              </>
            }
          />
        ) : (
          <span className={styles.userRedirect} onClick={()=>Router.push('/login')}>
            <IconSVG />
          </span>
        )}

        {/*  <Link href={user?"/dashboard":"/login"}>
               <a className={styles.linkCustom}> <IconSVG/> </a>
               </Link> */}
        {/*     <GlobosSvg/>
        <ReactSelect activeEl={activeLang} setactiveEl={setActiveLangf}  options={
                         language?.map((item: any) => ({
                             label: item.code.toUpperCase(),
                             value: item.code,
                         
                           }))
                     }/> */}
      </div>
      <div
        className={`${styles.header} ${styles["header" + color]}`}
        style={dropActive ? { zIndex: "0" } : {}}
      >
        <div className={`wrapper ${styles.wrapper}`}>
          <Link href="/">
            <a>
              <LogoSvg />
            </a>
          </Link>
          <Nav settoggle={settoggle} />
          {useResponsivenenessAdjuster(920) && (
            <div className={styles.BGSearch}></div>
          )}
        </div>

        <div
          className={`${styles.responsiveMenu}  ${
            toggle ? styles.responsiceActive : styles.responsiveDeActive
          }`}
        >
          <div>
            <div className={styles.menuHeader}>
              <MobileDropDOwn
                style={{ top: "49px", width: "100px", left: "-1px" }}
                entity={[
                  { title: "Az", link: "#" },
                  { title: "Ru", link: "#" },
                ]}
                element={
                  <div className={styles.mobileLang}>
                    <UnionSvg />
                    <span className={styles.mobileLetter}>AZ</span>
                    <span>
                      <ArrowSvg color="white" />
                    </span>
                  </div>
                }
              />

              <span onClick={() => settoggle(false)}>
                {" "}
                <CloseSVG color="white" />
              </span>
            </div>
            <ul>
              {nav.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <a> {item["title_AZ"]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.buttons}>
            {check() && data.users.user_info ? (
              <section>
                <ul className={styles.userName}>
                  <li onClick={() => setactiveuserDrop(!activeuserDrop)}>
                    <UserIcon2 />
                    <p>
                      {data?.users?.user_info?.firstName +
                        " " +
                        data?.users?.user_info?.lastName}
                    </p>
                    <span
                      style={
                        activeuserDrop
                          ? {
                              transform: "rotate(180deg)",
                              justifyContent: "flex-start",
                            }
                          : {}
                      }
                    >
                      <ArrowSvg color="white" height={"8px"} width={"15px"} />
                    </span>
                  </li>
                  {activeuserDrop && (
                    <li
                      onClick={() => {
                        setCookie("agent", "", { days: 0 });
                        Router.push("/");
                      }}
                    >
                      <LogoutSVG />
                      <p>Çıxış</p>
                    </li>
                  )}
                </ul>
              </section>
            ) : (
              <>
                <ButtonUI
                  text="Giriş"
                  width="100%"
                  border="1px solid rgba(255, 255, 255, 0.2"
                  onclick={() => Router.push("/login")}
                />
                <ButtonUI
                  text="Qeydiyyat"
                  color="rgba(255, 255, 255, 0.2)"
                  width="100%"
                  onclick={() => Router.push("/register")}
                />
              </>
            )}
          </div>
          {/*    <div className={styles.navAuth}>
         
             </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
