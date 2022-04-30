import Link from "next/link";
import { useEffect } from "react";
import SliderItem from "../../components/slider_item";
import ButtonUI from "../../components/UI/Button";
import SliderItemUI from "../../components/UI/Slider";
import Faq from "../../container/faq";
import SliderUI from "../../container/slider";
import BodyCrousel from "../../container/slider/bodyCarousel";
import CustomSlider from "../../hooks/CustomSlider";
import { MainBgSvg } from "../../svg/MainBg";
import styles from "./index.module.css";
type HomeProps = {};
const tarifs = [
  { id: 1, date: "1 saat", price: 5 },
  { id: 2, date: "1 ay", price: 59, label: "Populyar" },
  { id: 3, date: "3 ay", price: 168 },
  { id: 4, date: "5 ay", price: 265 },
];
const HomePage: React.FC<HomeProps> = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className="wrapper">
          <div className={styles.main}>
            <div className={styles.slogan}>
              <h1>
                Xarici dili <br />
                <span>danışaraq</span> öyrənin
              </h1>
              <p>Dil səviyyəni öyrənmək üçün pulsuz test et</p>
              <ButtonUI text="Testə başla" width="157px" height="56px" />
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
                    {" "}
                    <SliderItemUI />{" "}
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
        </div>
      </div>
      <SliderUI />
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
              <div><p>Hər səviyyəyə uyğun</p> <h4>qramatika</h4></div>
              <div><p>Hər gün</p>  <h4>yeni sözlər</h4></div>
            </div>
          </div>
        </div>
      </section>
        <section className={styles.connection}>
          <div className="wrapper">
          <h4>Yaxın zamanda olacaq söhbətlər</h4>
          <BodyCrousel/>
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
            {tarifs.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.date}</p>
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

      <Faq />
    </>
  );
};

export default HomePage;
