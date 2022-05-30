import { useRouter } from "next/router";
import TeacherAuthHeader from "./header";
import styles from "./index.module.css";
type AuthTeacherProps = {
  children:JSX.Element
};

const AuthTeacher: React.FC<AuthTeacherProps> = ({children}) => {
  const router = useRouter()
  return (
    <div className={styles.AuthTeacher}>
      <div className="warpperAUth">
        <TeacherAuthHeader />
        <ul className={styles.topHeaderButtons}>
          <li className={router.pathname==='/dashboard'?styles.active:''} onClick={()=>router.push('/dashboard')}>Söhbətlər</li> <li /* className={router.pathname==='/dashboard/talk-history'?styles.active:''} */ /* onClick={()=>router.push('/dashboard/talk-history')} */ >Haqqımda</li>
        </ul>

<div className={styles.areaCalendar}>
  <ul className={styles.linkarea}>
    <li className={router.pathname==='/dashboard'?styles.active:''} onClick={()=>router.push('/dashboard')}>Kalendar</li>
    <li className={router.pathname==='/dashboard/talk-history'?styles.active:''} onClick={()=>router.push('/dashboard/talk-history')}>Söhbət tarixçəsi</li>
  </ul>
{children}
</div>
       
      </div>
    </div>
  );
};

export default AuthTeacher;
