import { useRouter } from "next/router";
import { useEffect } from "react";
import agent from "../../Api/agent";
import AsideTeacher from "../../container/aside/asideTeacher";
import TeacherCardContainer from "../../container/teacher/teacherCard";
import { ITeacher } from "../../Model/DTO";
import styles from "./index.module.css";
import { serialize } from 'cookie'
import { CerticateUi } from "../../components/certificatesUi";
import Router  from 'next/router';
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
  const router = useRouter()
  const {slug} = router.query

  
  return (
    <div className={styles.SingleTeacherDetail}>
      <div className="wrapper">
        <ul className={styles.topLInk}>
          <li onClick={()=>Router.push('talks/'+slug)}>Söhbətlər</li>
          <li className={styles.topLinkActive}>Haqqında</li>
        </ul>
        <main className={styles.SingleTeacherBody}>
          <AsideTeacher item={teacher}/>
          <div className={styles.mainContenArea}>
            <div className={styles.videoLinkArea}>
        {
          teacher?.introductionVideoLink?      <iframe
          id="ytplayer"
          className={styles.hello}
          width="100%"
          height="360"
          src={teacher?.introductionVideoLink}
          frameBorder="0"
        ></iframe>: <div>Video tapılmadı</div>
        }
            </div>
            <h6 className={styles.thisTitle}>Təhsil</h6>
            <TeacherCardContainer data={teacher?.educations?.map(item=>({id:item.id, title:item.university, uptitle:item.educationLevel, desc:item.speciality}))}/>
            <h6 className={styles.thisTitle}>İş təcrübəsi</h6>
            <TeacherCardContainer data={teacher?.workExperiences?.map(item=>({id:item.id, title:item.workPlace,  desc:item.profession}))}/>
            <h6 className={styles.thisTitle}>Sertifikatlarım</h6>
            <CerticateUi  list={teacher?.certifications}  edit={false}/>
          {/*   <TeacherCardContainer data={teacher?.} /> */}
          </div>
        </main>
      </div>
    </div>
  );
};


export async function getServerSideProps({req, params:{slug}}:any){
 
  if (!(slug[0])) {
    return {
      props: { hasError: true },
      notFound: true,
      redirect: {
        destination: "/error",
      },
    };
  } 

  
 const res1  = slug?.length>0?slug[0]:''
 
/*  console.log(res,'res'); */
 let  token = req.headers.cookie.split('=')[1]||''

  //http://194.147.58.56:8090/api/v1/public/teachers/${res1}/profile?detailed=true

 //https://api.talkative.az/api/v1/public/teachers/${res1}/profile?detailed=true
 //
 const data = await fetch(` https://api.talkative.az/api/v1/public/teachers/${res1}/profile?detailed=true `, {
  headers: {
    'Accept':'application/json',
    'Authorization':'Bearer '+token,
    'Accept-Language':'en'
  }

}).then(res=>res.json())


console.log(token,'data');

 
/*   const data = await agent.teacher.list(); */
  return {
      props: {
          teacher:data?.data
      },
  };
}



export default SingleTeacher;
