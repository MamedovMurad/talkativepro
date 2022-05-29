import Link from "next/link";
import ButtonUI from "../../../../components/UI/Button";
import ZvanoqUI from "../../../../components/UI/Zvanoq/zvanoq";
import { LogoSvg } from "../../../../svg/Logo";
import styles from './index.module.css'
type TeacherAuthHeaderProps = {}
 
const TeacherAuthHeader:React.FC<TeacherAuthHeaderProps> = () => {
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
          <ButtonUI text="Söhbət yarat" width="169px" height="56px" />

        </div>
      </div>
        </div>
    );
}
 
 
export default TeacherAuthHeader;