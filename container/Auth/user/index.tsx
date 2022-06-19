import Router, { useRouter } from "next/router";
import Aside from "../../../layout/aside";
import Talks from "../../../pages/talks";
import TalksContainer from "../../talks";
import HeaderAuthUser from "./header";
import styles from "./index.module.css";
type AuthUserProps = {
  children:any
};

const AuthUser: React.FC<AuthUserProps> = ({children}) => {
  const router = useRouter()
  return (
    <div className={styles.authUser}>
      <div className="warpperAUth">
        <HeaderAuthUser />
        <ul className={styles.topHeaderButtons}>
          <li className={router.pathname=='/dashboard'?styles.active:''}onClick={()=>Router.push('/dashboard')}>Söhbətlər</li> 
          <li className={router.pathname=='/dashboard/followings'?styles.active:''} onClick={()=>Router.push('/dashboard/followings')}>İzlədiklərim</li>
           <li className={router.pathname=='/dashboard/grammer'?styles.active:''} onClick={()=>Router.push('/dashboard/grammer')}>Qrammatika/Lüğət</li>
        </ul>
        <div className={styles.asideMain}>
        
         {
           children
         }
        </div>
      </div>
    </div>
  );
};

export default AuthUser;
