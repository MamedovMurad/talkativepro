import Aside from "../../../layout/aside";
import Talks from "../../../pages/talks";
import TalksContainer from "../../talks";
import HeaderAuthUser from "./header";
import styles from "./index.module.css";
type AuthUserProps = {};

const AuthUser: React.FC<AuthUserProps> = () => {
  return (
    <div className={styles.authUser}>
      <div className="warpperAUth">
        <HeaderAuthUser />
        <ul className={styles.topHeaderButtons}>
          <li className={styles.active}>Söhbətlər</li> <li>İzlədiklərim</li> <li>Qrammatika/Lüğət</li>
        </ul>
        <div className={styles.asideMain}>
          <Aside width="20%" />
          <TalksContainer width="79%" />
        </div>
      </div>
    </div>
  );
};

export default AuthUser;
