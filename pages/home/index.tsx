import Link from "next/link";
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import LoginPage from "../../components/googleAccount/login";
import SliderItem from "../../components/slider_item";
import ButtonUI from "../../components/UI/Button";
import DatePicker from "../../components/UI/datepicker";
import SelectUI from "../../components/UI/Select";
import SliderItemUI from "../../components/UI/Slider";
import SweetAlertSuccess from "../../components/UI/sweetAlert";
import Faq from "../../container/faq";
import SearchTop from "../../container/searchTop";
import SliderUI from "../../container/slider";
import BodyCrousel from "../../container/slider/bodyCarousel";
import CustomSlider from "../../hooks/CustomSlider";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import { ITeacher } from "../../Model/DTO";
import { ArrowSvg } from "../../svg/ArrowSVG";
import { MainBgSvg } from "../../svg/MainBg";
import styles from "./index.module.css";
type HomeProps = {};
const HomePage: React.FC<HomeProps> = () => {
  const [tarifs, settarifs] = useState<{id:number, date:number; price:number; label:string}[]|null>(null)
  const [teachers, setteachers] = useState<ITeacher[]|null>(null)
  const [talks, settalks] = useState<any>()
  async function fetchTariffs() {
    const data = await agent.tariff.list();
   const tarif = data?.data?.map((item) => {
      return {
        id: item.id,
        date: item.hoursCount,
        price: item.price,
        label: item.name,
      };
    });
    tarif&&  settarifs(tarif)
  }
async function fetchTeachers(){
  const res =  await agent.teacher.list()
  res.data&& setteachers(res.data?.entities)
}
async function fetchTalks() {
  const res =  await agent.talk.list()
  res.data&& settalks(res.data?.entities)
}
  useEffect(() => {
    fetchTalks()
    fetchTeachers()
    fetchTariffs();
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <div className="wrapper">
          {/* <LoginPage/> */}
          <div className={styles.main}>
            <div className={styles.slogan}>
              <h1>
                Xarici dili <br />
                <span>danışaraq</span> öyrənin
              </h1>
              <p>Dil səviyyəni öyrənmək üçün pulsuz test et</p>
              <ButtonUI text="Testə başla" width={useResponsivenenessAdjuster(800)?'100%':'157px'} height="56px" color="#e48402"/>
            </div>
            <div className={styles.mainBgSLider}>
              <div className={styles.customFlexSvg}>
                <div>
                  <img src="/uploads/mobile.png" alt="" />
                </div>
                <div>
                  <img src="/uploads/prtiret.png" alt="" />
                </div>
                <div className={styles.laptop}>
                  <div>
                    <SliderItemUI />
                  </div>
                </div>
                <div>
                  <img src="/uploads/portiret.png" alt="" />
                </div>
                <div>
                  <img src="/uploads/mobile2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <SearchTop margin="66px 0 0 0 " />
        </div>
      </div>
      <div className={styles.sliderui}><SliderUI data={teachers}/></div>
      <div className="wrapper"><div className={styles.sliderBootm}> 
      <Link href='/teachers'><a ><p>Bütün müəllimlər</p> 
      <span><ArrowSvg/></span></a></Link></div></div>
      <section className={styles.teachersection}>
        <div className="wrapper">
          <div className={styles.chooseTeacher}>
            <div className={styles.top}>
              <div className={styles.teachersBg}>
                <img src="/uploads/teachers.png" alt="" />
              </div>
              <div className={styles.teacherContent}>
                <div>
                  <p>Müəllimini</p>
                  <h3>özün seç</h3>
                  <p>
                    Dərəcə, dil bliyi və sizə uyğun olma saatlarına görə
                    müqayisə edərək müəlliminizi seçin və söhbətlərinə qoşulun
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <div>
                <p>Hər səviyyəyə uyğun</p> <h4>qramatika</h4>
              </div>
              <div>
                <p>Hər gün</p> <h4>yeni sözlər</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.connection}>
        <div className="wrapper">
          <h4>Yaxın zamanda olacaq söhbətlər</h4>
          <BodyCrousel talks={talks}/>
        </div>
      </section>
      <div className={styles.register}>
        <div className="wrapper">
          <div className={styles.content}>
            <h3>Qeydiyyatdan keç</h3>
            <p>və bizim kollektive qoşul</p>

            <div className={styles.buttonArea}>
              <Link href="/register">
                <a>
                  <ButtonUI text="Qeydiyyat" height="56px" width="147px" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.registerImage}></div>
        </div>
      </div>
      <div className={styles.tarif}>
        <div className="wrapper">
          <h3>Tariflərimizlə tanış olun</h3>
          <ul>
            {tarifs?.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.date} saat</p>
                  {item.label && <button>{item.label}</button>}
                </div>

                <h4>
                  {item.price} <span>₼</span>
                </h4>
                <button>Əldə et</button>
              </li>
            ))}
           
          </ul>
        </div>
      </div>
      <a href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"></a>
  
      <Faq />
    </>
  );
};

export default HomePage;
