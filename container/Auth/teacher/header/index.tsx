import Link from "next/link";
import { useContext } from "react";
import TalkAddModal from "../../../../components/modal/addtalk";
import ButtonUI from "../../../../components/UI/Button";
import ZvanoqUI from "../../../../components/UI/Zvanoq/zvanoq";
import { UserContext } from "../../../../pages/_app";
import { LogoSvg } from "../../../../svg/Logo";
import styles from './index.module.css'
type TeacherAuthHeaderProps = {}
 
const TeacherAuthHeader:React.FC<TeacherAuthHeaderProps> = () => {
  const [data, dispatch] = useContext(UserContext);
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
        <div className={styles.headerTeacher}>
          <ZvanoqUI count={6} />
          <div className={styles.balance}>
              <span>Balans</span>
              <p>156 azn</p>
          </div>
          <ButtonUI text="Söhbət yarat" width="169px" height="56px" onclick={()=>dispatch({type:'setModalActive', payload:<TalkAddModal/>})}/>

        </div>
      </div>
        </div>
    );
}
 
 
export default TeacherAuthHeader;