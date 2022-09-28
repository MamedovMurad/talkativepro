import { useEffect, useState } from "react";
import agent from "../../../Api/agent";
import { GenericListDto } from "../../../Model/DTO";
import Router, { useRouter } from 'next/router'
import TalkHistory from "../../../container/talkHistory";
import styles from './index.module.css'
import stylesParent from "../index.module.css";
type TeacherTalkProps = {}
 
const TeacherTalk:React.FC<TeacherTalkProps> = () => {
    const [Old, setOld] = useState<GenericListDto<any>|null>(null)
    const [activeTalk, setactiveTalk] = useState<GenericListDto<any>|null>(null)
    const [tab, settab] = useState(false)
    const router = useRouter()
    const {slug} = router.query


      const fetchApi= async (params:string) => {
        const res = await agent.teacher.oldTalk(params)
        res&& setOld(res.data)
        const aktveData= await agent.talk.list([],[],[],'',10,0,params)
        aktveData&& setactiveTalk(activeTalk)
       }

       
    useEffect(() => {
       slug&& fetchApi(slug[0])
    }, [slug])
    
    return (
        <section className={styles.oldConversation}>
           <div className="wrapper">
           <ul className={stylesParent.topLInk}>
          <li className={stylesParent.topLinkActive} >Söhbətlər</li>
          <li  onClick={()=>Router.push('/teacher/'+slug)}>Haqqında</li>
        </ul>
        <div className={styles.areaCalendar}>
  {
  <ul className={styles.linkarea}>
    <li className={tab===false?styles.active:''} onClick={()=>settab(false)}>Aktiv dərslər</li>
    <li className={tab===true?styles.active:''} onClick={()=>settab(true)}>Söhbət tarixçəsi</li>
  </ul>
  }


</div>
           <TalkHistory list={tab?Old?.entities : activeTalk?.entities}/>
           </div>
        </section>
    );
}
 
 
export default TeacherTalk;