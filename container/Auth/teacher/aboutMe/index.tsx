import Router from "next/router";
import { setCookie } from "react-use-cookie";
import DropDownUI from "../../../../components/UI/dropDown";
import { SettingsSVG } from "../../../../svg/settings";
import AsideTeacher from "../../../aside/asideTeacher";
import TeacherCardContainer from "../../../teacher/teacherCard";
import styles from '../../../../pages/teacher/index.module.css'
type AboutTeacherAuthProps = {
  data?: any;
};

const AboutTeacherAuth: React.FC<AboutTeacherAuthProps> = ({ data }) => {
    console.log(data,'data');
    
  function cb() {
    setCookie("agent", "", { days: 0 });
    Router.push("/login");
  }
  return (
    <div>
  <main className={styles.SingleTeacherBody}>
      <AsideTeacher
        item={data}
        detail={
          <DropDownUI
            title={<SettingsSVG />}
            dropDownArr={[
              { title: "Redaktə et", link: "/dashboard/edit-private-info" },
              { title: "Bizimlə əlaqə", link: "/contact" },
              { title: "Çıxış", cb: cb },
            ]}
          />
        }
      />
             <div className={styles.mainContenArea}>
            <div className={styles.videoLinkArea}>
              <iframe
                id="ytplayer"
                className={styles.hello}
                width="100%"
                height="360"
                src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                frameBorder="0"
              ></iframe>
            </div>
            <h6 className={styles.thisTitle}>Təhsil</h6>
            <TeacherCardContainer data={data?.educations}/>
            <h6 className={styles.thisTitle}>İş təcrübəsi</h6>
           {/*  <TeacherCardContainer data={teacher?.} /> */}
          </div>
          </main>
    </div>
  );
};

export default AboutTeacherAuth;
