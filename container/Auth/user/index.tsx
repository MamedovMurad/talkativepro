import HeaderAuthUser from "./header";
import styles from "./index.module.css";
type AuthUserProps = {};

const AuthUser: React.FC<AuthUserProps> = () => {
  return (
    <div className={styles.authUser}>
      <div className="wrapper">
        <HeaderAuthUser/>
      </div>
    </div>
  );
};

export default AuthUser;
