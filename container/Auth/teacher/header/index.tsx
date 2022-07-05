import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import agent from "../../../../Api/agent";
import TalkAddModal from "../../../../components/modal/addtalk";
import ButtonUI from "../../../../components/UI/Button";
import ZvanoqUI from "../../../../components/UI/Zvanoq/zvanoq";
import { UserContext } from "../../../../pages/_app";
import { LogoSvg } from "../../../../svg/Logo";
import styles from './index.module.css'
type TeacherAuthHeaderProps = {}
 
const TeacherAuthHeader:React.FC<TeacherAuthHeaderProps> = () => {
  const [count, setCount] = useState<number>(0)
  async function fetchCount() {
    const res = await agent.notification.getCount()
    res?.data&& setCount(res.data)
  }
  useEffect(() => {fetchCount() }, [])
  
  const [data, dispatch] = useContext(UserContext);

  function handleModal(){
   /*  console.log(data?.users); */
    
    if (data?.users?.user_info.isApproved &&data?.users?.user_info?.teacherLanguages?.find((item:any)=>item.isApproved==true)) {
      return dispatch({type:'setModalActive', payload:<TalkAddModal/>})
    }else if (!data?.users?.user_info?.teacherLanguages?.find((item:any)=>item.isApproved==true)) {
      return toast.error('Aktiv dil yoxdur')
    }
    else{
      return toast.error('Hesab aktiv deyil')
    }
   
  }
    return (
        <div>
           <div className={styles.topHeader}>
        <div>
          <Link href="/">
            <a>
              <LogoSvg />
            </a>
          </Link>
        </div>
        <div className={styles.headerTeacher}>
          <ZvanoqUI count={count+''} />
          <div className={styles.balance}>
              <span>Balans</span>
              <p>156 azn</p>
          </div>
          <ButtonUI text="Söhbət yarat" width="169px" height="56px" onclick={handleModal}/>

        </div>
      </div>
        </div>
    );
}
 
 
export default TeacherAuthHeader;