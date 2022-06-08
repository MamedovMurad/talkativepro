import { setCookie } from "react-use-cookie";
import { SettingsSVG } from "../../svg/settings";
import DropDownUI from "../UI/dropDown";
import styles from "./index.module.css";
type TeacherAsideComponentProps = {
  detail?:any
};

const TeacherAsideComponent: React.FC<TeacherAsideComponentProps> = ({detail}) => {

  return (
    <div className={styles.teacherasidecomp}>
    {
        detail
    }
      <div>
        <img src="/uploads/teahcer.png" alt="" />
        <div className={styles.contentArea}>
          <p>25 izləyici</p>
          <h4>Aysel Malikova</h4>
          <div>
            <span>Azərbaycan</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>İngilis dili</button>
        <button>Rus dili</button>
      </div>
      {
        !detail&&<button>İzlənir</button>
      }
      

      <p className={styles.mainCOntent}>
        Hi. My name is Mansura. I am here to help you to improve your English. I
        have been teaching English to a wide range of students, including
        children, teenagers, and adults. I believe that the best way of learning
        English is to have the students speak as much as possible, so that they
        feel more comfortable using it in different types of contexts and
        experiences. My hobbies include going abroad, cooking, and also reading
        various types of books. I also really enjoy speaking with people from
        all over the world, including my students, but also other fantastic
        people that I have met. My goal is to help you speak English fluently.
        Now you know a little bit about me, I can not wait to learn more about
        you.
      </p>
    </div>
  );
};

export default TeacherAsideComponent;
