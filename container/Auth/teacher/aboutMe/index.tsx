import Router from "next/router";
import { setCookie } from "react-use-cookie";
import DropDownUI from "../../../../components/UI/dropDown";
import { SettingsSVG } from "../../../../svg/settings";
import AsideTeacher from "../../../aside/asideTeacher";
import TeacherCardContainer from "../../../teacher/teacherCard";
import styles from "../../../../pages/teacher/index.module.css";
import ButtonDash from "../../../../components/UI/Button/addDash";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../pages/_app";
import FormDash, { FormCertificate, FormvideoLink } from "../../../FormDash";
import agent from "../../../../Api/agent";
import { useForm } from "react-hook-form";
import { CerticateUi } from "../../../../components/certificatesUi";
import { ITeacher } from "../../../../Model/DTO";
import { AddEduModal } from "../../../../components/modal/addEdu";
type AboutTeacherAuthProps = {
  data?: any;
};

const AboutTeacherAuth: React.FC<AboutTeacherAuthProps> = ({ data }) => {
  const [context, dispatch] = useContext(UserContext);
  const [dto, setdto] = useState<ITeacher | null>(null);

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
  const fetchApi = async () => {
    if (localStorage.getItem("teacher")) {
      const data = await agent.Auth.teacherMe();
      dispatch({ type: "setModalpassive" });
      return setdto(data.data);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

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
          {
            dto?.introductionVideoLink&&  <section className={styles.removeButton}>
            <label htmlFor="" onClick={()=>{dto&&setdto({...dto, introductionVideoLink:null})}}>
              -
            </label>
            </section>
          }
            {dto?.introductionVideoLink ? (
              <iframe
                id="ytplayer"
                className={styles.hello}
                width="100%"
                height="360"
                src={dto?.introductionVideoLink}
                frameBorder="0"
              ></iframe>
            ) : (
              <div
                onClick={() =>
                  dispatch({
                    type: "setModalActive",
                    payload: (
                      <FormDash>
                        <FormvideoLink callback={fetchApi} />{" "}
                      </FormDash>
                    ),
                  })
                }
              >
                <div>
                  <div>
                    <label className={styles.plusicon}>+</label>
                  </div>
                  <h5>Video əlavə et</h5>
                  <p>
                    Xarici dildə danışdığın bir videonu əlavə edərək,
                    tələbələrin səni tanımasına kömək et
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            <h6 className={styles.thisTitle}>Təhsil</h6>
            <div className={styles.flexarea}>
              <ButtonDash
                onClick={() =>
                  dispatch({
                    type: "setModalActive",
                    payload: <AddEduModal callback={fetchApi} />,
                  })
                }
              />
              <TeacherCardContainer
                data={dto?.educations}
                isedit={true}
                callback={fetchApi}
              />
            </div>
          </div>
          {/*           
          <div>
          <h6 className={styles.thisTitle}>İş təcrübəsi</h6>
            <ButtonDash onClick={()=>dispatch({type:'setModalActive', payload:<AddEduModal/>})}/>
         
          </div> */}

          <div>
            <h6 className={styles.thisTitle}>Sertifikatlarım</h6>
            <div className={styles.flexarea}>
              <ButtonDash
                onClick={() =>
                  dispatch({
                    type: "setModalActive",
                    payload: (
                      <FormDash>
                        <FormCertificate callback={fetchApi} certificate = {dto?.certifications} />
                      </FormDash>
                    ),
                  })
                }
              />
              <CerticateUi list={dto?.certifications} callback={fetchApi} />
            </div>
          </div>
          {/* <TeacherCardContainer data={context?.users.user_info?.certifications} />  */}
        </div>
      </main>
    </div>
  );
};

export default AboutTeacherAuth;
