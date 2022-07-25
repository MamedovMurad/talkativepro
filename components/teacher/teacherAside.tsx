import Router from "next/router";
import { useContext, useState, useEffect } from "react";
import { setCookie } from "react-use-cookie";
import agent, { baseImageUrl } from "../../Api/agent";
import { ITeacher } from "../../Model/DTO";
import { UserContext } from "../../pages/_app";
import { SettingsSVG } from "../../svg/settings";
import DropDownUI from "../UI/dropDown";
import styles from "./index.module.css";
type TeacherAsideComponentProps = {
  detail?: any;
  item?: ITeacher;
};

const TeacherAsideComponent: React.FC<TeacherAsideComponentProps> = ({
  detail,
  item,
}) => {
  const [data, dispatch] = useContext(UserContext);
  const [paragraph, setparagraph] = useState<string | null>(null);
  
  const folloToggle = async (uuid?: string) => {
    if (item?.isFollowedByCurrentUser !== null) {
      const res =
        uuid &&
        (await agent.Student.followTeacherToggle({
          url: uuid,
          isFolledByCurrentUser: !item?.isFollowedByCurrentUser,
        }));

      Router.push("/teacher/" + uuid);
    }else{
      Router.push('/login')
    }
  };

  function defSetParagraph() {
    setparagraph(
      item?.teacherLanguages?.find((item, i) => i == 0)?.introduction || null
    );
  }
  useEffect(() => {
    defSetParagraph();
  }, [item]);

  return (
    <div className={styles.teacherasidecomp}>
      {detail}
      <div className={styles.profilearea} style={!detail?{width:'100%'}:{}}>
        {item?.firstName &&
          (item?.avatar ? (
            <img src={baseImageUrl + item?.avatar} alt="" />
          ) : (
            <div className={styles.profileCaptalize}>
              {item?.firstName[0] + " " + item?.lastName[0]}
            </div>
          ))}

        <div className={styles.contentArea}>
          <p>{item?.followerCount} izləyici</p>
          <h4>{item?.firstName + " " + item?.lastName}</h4>
          <div>
            <span>Azərbaycan</span>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        {item?.teacherLanguages?.map((t) => (
          <button
            key={t.language.id}
            onClick={() => setparagraph(t.introduction)}
            style={!t.isApproved?{background:'#EDBB99', color:'#D35400', borderColor:'#D35400'}:{}}
            className={
              t.introduction == paragraph
                ? styles.activeButton
                : styles.buttonitem
            }
          >
            {t.language.name}
          </button>
        ))}
      </div>

      {!detail && (
        <button
          style={{ marginTop: "5px" }}
          onClick={() => folloToggle(item?.uuid)}
          className={
            item?.isFollowedByCurrentUser ? styles.active : styles.passiveButton
          }
        >
          {" "}
          {item?.isFollowedByCurrentUser ? "İzlənir" : "Müəllimi izlə"}
        </button>
      )}

      <p className={styles.mainCOntent}>{paragraph}</p>
    </div>
  );
};

export default TeacherAsideComponent;
