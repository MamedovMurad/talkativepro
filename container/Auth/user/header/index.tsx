type HeaderAuthProps = {};
import Link from "next/link";
import  Router, {useRouter } from 'next/router'
import { useContext, useEffect, useState } from "react";
import { setCookie } from "react-use-cookie";
import agent, { baseImageUrl } from "../../../../Api/agent";
import ButtonUI from "../../../../components/UI/Button";
import SelectUI from "../../../../components/UI/Select";
import ZvanoqUI from "../../../../components/UI/Zvanoq/zvanoq";
import useResponsivenenessAdjuster from "../../../../hooks/useResponsivenenessAdjuster";
import { UserContext } from "../../../../pages/_app";
import { ArrowSvg } from "../../../../svg/ArrowSVG";
import { BackSVG } from "../../../../svg/BackSVG";
import { LogoSvg } from "../../../../svg/Logo";
import { IconSVG } from "../../../../svg/userSvg";


import styles from "./index.module.css";
const HeaderAuthUser: React.FC<HeaderAuthProps> = () => {
  const [data, dispatch] = useContext(UserContext)
  const user  =  data.users.user_info
  const router = useRouter()
  const [count, setCount] = useState<number>(0)
  async function fetchCount() {
    const res = await agent.notification.getCount()
    res?.data&& setCount(res.data)
  }
  useEffect(() => {
    const id = setInterval(fetchCount, 30000);
    return () => clearInterval(id);
  }, [])

  const extDashboard = ()=>{
    setCookie('agent', '', { days: 0 })
    router.push('/login')
    dispatch({ type: "setUser", payload: null });
  }
  const responsive =  useResponsivenenessAdjuster(860)
  return (
    <div>
      <div className={styles.topHeader}>
        <div>
          <Link href="/">
            <a>
              <LogoSvg />
            </a>
          </Link>
        </div>
        <div className={styles.headerUser}>
       
          <ZvanoqUI count={count+''} />
         <span className={styles.extMobile} onClick={extDashboard} style={{transform: 'translateY(-4px)'}}> <BackSVG width='40px' height={"40px"}/></span>
          {
            !responsive&& <>
            <ButtonUI text="Abunə ol" width="136px" height="56px" />

          <SelectUI
            arrow={false}
            width="230px"
            custom_element={
              <div className={styles.header_user}>{
              user?.avatar?  <img src={baseImageUrl+user.avatar} alt="" />: <div style={{background:user?.bgColor}} className={styles.avatar}> {user?.firstName[0] + ' '+ user?.lastName[0]}</div>
              }
              
                <div>
                 {
                   user? <p>
                   {user.firstName + ' '+ user.lastName} <ArrowSvg />
                 </p> : <p>yüklənir</p>
                 }
                  <p>İntermediate</p>
                </div>
              </div>
            }
          >
            <div style={{ marginTop: "50px" }}>
              <li onClick={()=>Router.push('dashboard/edit-private-info')}>Redaktə et</li>
              <li>Səviyyə testi</li>
              <li>Bizimlə əlaqə</li>
              <li onClick={extDashboard}>Çıxış</li>
            </div>
          </SelectUI>
            </>
          }
         

        </div>
      </div>
    </div>
  );
};

export default HeaderAuthUser;
