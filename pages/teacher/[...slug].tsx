import AsideTeacher from "../../container/aside/asideTeacher";
import TeacherCardContainer from "../../container/teacher/teacherCard";
import styles from "./index.module.css";
type SingleTeacherProps = {};
const data = [
  {
    id: 1,
    title: "Azərbaycan Dövlət Neft və Sənayə Universiteti",
    desc: "Komputer mühəndisliyi",
    UCdegree: "bakalavr",
  },
  {
    id: 2,
    title: "Azərbaycan Dövlət Neft və Sənayə Universiteti",
    desc: "Komputer mühəndisliyi",
    UCdegree: "bakalavr",
  },
  {
    id: 3,
    title: "Azərbaycan Dövlət Neft və Sənayə Universiteti",
    desc: "Komputer mühəndisliyi",

  },
  {
    id: 4,
    title: "Azərbaycan Dövlət Neft və Sənayə Universiteti",
    desc: "Komputer mühəndisliyi",

  },
  
];

const SingleTeacher: React.FC<SingleTeacherProps> = () => {
  return (
    <div className={styles.SingleTeacherDetail}>
      <div className="wrapper">
        <ul className={styles.topLInk}>
          <li>Söhbətlər</li>
          <li className={styles.topLinkActive}>Haqqında</li>
        </ul>
        <main className={styles.SingleTeacherBody}>
          <AsideTeacher />
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
            <TeacherCardContainer data={data.slice(1,3)} />
            <h6 className={styles.thisTitle}>İş təcrübəsi</h6>
            <TeacherCardContainer data={data.slice(2)} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleTeacher;
