import Router from "next/router";
import { setCookie } from "react-use-cookie";
import DropDownUI from "../../../../components/UI/dropDown";
import { SettingsSVG } from "../../../../svg/settings";
import AsideTeacher from "../../../aside/asideTeacher";
import TeacherCardContainer from "../../../teacher/teacherCard";
import styles from '../../../../pages/teacher/index.module.css'
import ButtonDash from "../../../../components/UI/Button/addDash";
import { useContext, useState } from "react";
import { UserContext } from "../../../../pages/_app";
import FormDash from "../../../FormDash";
import FileUpload from "../../../../components/UI/fileUpload";
import toast from "react-hot-toast";
import agent from "../../../../Api/agent";
import { useForm } from "react-hook-form";
type AboutTeacherAuthProps = {
  data?: any;
};

const AboutTeacherAuth: React.FC<AboutTeacherAuthProps> = ({ data }) => {
  const [context, dispatch] = useContext(UserContext);
    const [file, setfile] = useState<null|string>();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  function cb() {
    setCookie("agent", "", { days: 0 });
    Router.push("/login");
  }
  async function Addcertificate(){
    if (file) {

      const res = await agent.teacher.certifatePost({fileName:file})
      res && toast.success('Sertifikat əlavə edildi')
      setfile(null)
    }else{
      toast.error('Fayl əlavə edin')
    }
    
  }
  console.log(file,'file');
  
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
            <div>

            <h6 className={styles.thisTitle}>Təhsil</h6>
            <ButtonDash/>
            <TeacherCardContainer data={data?.educations}/>
           
            </div>
          
          <div>
          <h6 className={styles.thisTitle}>İş təcrübəsi</h6>
            <ButtonDash/>
           {/*  <TeacherCardContainer data={teacher?.} /> */}
          </div>
          
          <h6 className={styles.thisTitle}>Sertifikatlarım</h6>
            <ButtonDash onClick={ ()=>dispatch({type:'setModalActive', payload:<FormDash CB={handleSubmit(Addcertificate)} file={setfile}><FileUpload text='Sertifikatinizi bura yükləyin' file={setfile}/></FormDash>})}/>
           {/*  <TeacherCardContainer data={teacher?.} /> */}
          </div>
          </main>
    </div>
  );
};

export default AboutTeacherAuth;
