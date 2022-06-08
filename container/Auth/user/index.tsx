import Router from "next/router";
import Aside from "../../../layout/aside";
import Talks from "../../../pages/talks";
import TalksContainer from "../../talks";
import HeaderAuthUser from "./header";
import styles from "./index.module.css";
type AuthUserProps = {
  children:any
};

const AuthUser: React.FC<AuthUserProps> = ({children}) => {

  return (
    <div className={styles.authUser}>
      <div className="warpperAUth">
        <HeaderAuthUser />
        <ul className={styles.topHeaderButtons}>
          <li className={styles.active}>Söhbətlər</li> <li>İzlədiklərim</li> <li onClick={()=>Router.push('/dashboard/grammer')}>Qrammatika/Lüğət</li>
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
