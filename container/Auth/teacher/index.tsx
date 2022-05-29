import CustomCalendar from "../calendar";
import TeacherAuthHeader from "./header";
import styles from "./index.module.css";
type AuthTeacherProps = {};

const AuthTeacher: React.FC<AuthTeacherProps> = () => {
  return (
    <div className={styles.AuthTeacher}>
      <div className="warpperAUth">
        <TeacherAuthHeader />
        <ul className={styles.topHeaderButtons}>
          <li className={styles.active}>Söhbətlər</li> <li>Haqqımda</li>
        </ul>

<div className={styles.areaCalendar}>
<CustomCalendar/>
</div>
       
      </div>
    </div>
  );
};

export default AuthTeacher;
