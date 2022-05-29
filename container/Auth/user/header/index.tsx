type HeaderAuthProps = {};
import Link from "next/link";
import { useRouter } from 'next/router'
import { useContext } from "react";
import { setCookie } from "react-use-cookie";
import ButtonUI from "../../../../components/UI/Button";
import SelectUI from "../../../../components/UI/Select";
import ZvanoqUI from "../../../../components/UI/Zvanoq/zvanoq";
import { UserContext } from "../../../../pages/_app";
import { ArrowSvg } from "../../../../svg/ArrowSVG";
import { LogoSvg } from "../../../../svg/Logo";
import styles from "./index.module.css";
const HeaderAuthUser: React.FC<HeaderAuthProps> = () => {
  const [data, dispatch] = useContext(UserContext)
  const router = useRouter()
  const extDashboard = ()=>{
    setCookie('agent', '', { days: 0 })
    router.push('/login')
    dispatch({ type: "setUser", payload: null });
  }
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
          <ZvanoqUI count={6} />
          <ButtonUI text="Abunə ol" width="136px" height="56px" />

          <SelectUI
            arrow={false}
            width="208px"
            custom_element={
              <div className={styles.header_user}>
                <img src="./uploads/teahcer.png" alt="" />
                <div>
                  <p>
                    Aysel Malikova <ArrowSvg />
                  </p>
                  <p>İntermediate</p>
                </div>
              </div>
            }
          >
            <div style={{ marginTop: "50px" }}>
              <li>Redaktə et</li>
              <li>Səviyyə testi</li>
              <li>Bizimlə əlaqə</li>
              <li onClick={extDashboard}>Çıxış</li>
            </div>
          </SelectUI>
        </div>
      </div>
    </div>
  );
};

export default HeaderAuthUser;
