import { useRouter } from "next/router";
import { useEffect } from "react";
import agent from "../../Api/agent";
import AsideTeacher from "../../container/aside/asideTeacher";
import TeacherCardContainer from "../../container/teacher/teacherCard";
import { ITeacher } from "../../Model/DTO";
import styles from "./index.module.css";
type SingleTeacherProps = {
  teacher?:ITeacher
};
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

const SingleTeacher: React.FC<SingleTeacherProps> = ({teacher}) => {

  
  return (
    <div className={styles.SingleTeacherDetail}>
      <div className="wrapper">
        <ul className={styles.topLInk}>
          <li>Söhbətlər</li>
          <li className={styles.topLinkActive}>Haqqında</li>
        </ul>
        <main className={styles.SingleTeacherBody}>
          <AsideTeacher item={teacher}/>
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
            <TeacherCardContainer data={teacher?.educations}/>
            <h6 className={styles.thisTitle}>İş təcrübəsi</h6>
           {/*  <TeacherCardContainer data={teacher?.} /> */}
          </div>
        </main>
      </div>
    </div>
  );
};


export async function getServerSideProps({params:{slug}}:any){
 
  if (!(slug[0])) {
    return {
      props: { hasError: true },
      notFound: true,
      redirect: {
        destination: "/error",
      },
    };
  } 

  
 const res  = slug?.length>0?slug[0]:''
 
 console.log(res,'res');
 const data = await (fetch(`http://194.147.58.56:8090/api/v1/public/teachers/${res}/profile`).then(response => response.json()))
/*   const data = await agent.teacher.list(); */
  return {
      props: {
          teacher:data.data
      },
  };
}



export default SingleTeacher;
