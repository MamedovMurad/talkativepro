import { useContext } from "react";
import { setCookie } from "react-use-cookie";
import agent, { baseImageUrl } from "../../Api/agent";
import { ITeacher } from "../../Model/DTO";
import { UserContext } from "../../pages/_app";
import { SettingsSVG } from "../../svg/settings";
import DropDownUI from "../UI/dropDown";
import styles from "./index.module.css";
type TeacherAsideComponentProps = {
  detail?:any
  item?:ITeacher,
};

const TeacherAsideComponent: React.FC<TeacherAsideComponentProps> = ({detail, item}) => {
  const [data, dispatch] = useContext(UserContext);
const folloToggle = async (uuid?:string) => {
  if (data.users.user_info.uuid) {
    const res =uuid&& await agent.Student.followTeacherToggle({url:uuid, isFolledByCurrentUser:true})

    console.log(res,'res');
  }
 
    
}
  return (
    <div className={styles.teacherasidecomp}>
    {
        detail
    }
      <div>{
     item?.firstName && ( item?.avatar? <img src={baseImageUrl+item?.avatar} alt="" />: <div className={styles.profileCaptalize}>{item?.firstName[0]+' '+item?.lastName[0]}</div>)}
       
        <div className={styles.contentArea}>
          <p>25 izləyici</p>
          <h4>{item?.firstName+ ' ' + item?.lastName}</h4>
          <div>
            <span>Azərbaycan</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        {
          item?.languages?.map(t=>(
            <button key={t.id}>{t.name}</button>
          ))
        }
      </div>
      {
        !detail&&<button style={{marginTop:'5px'}} onClick={()=>folloToggle(item?.uuid)}>İzlənir</button>
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
