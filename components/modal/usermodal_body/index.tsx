import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import agent, { baseImageUrl } from '../../../Api/agent';
import { ITeacher } from '../../../Model/DTO';
import { UserContext } from '../../../pages/_app';
import { LocationSVG } from '../../../svg/locationSVG';
import { StarSVG } from '../../../svg/starSVG';
import { UsersSVG } from '../../../svg/usersSVG';
import styles from './index.module.css'
type UserModalBodyProps = {
    uuid?:string
}
 
const UserModalBody:React.FC<UserModalBodyProps> = ({uuid}) => {
    console.log(uuid,'log');
    
const [item, setitem] = useState<ITeacher|null>(null)
const [data, dispatch] = useContext(UserContext);
async function fetchTeacher(uuid:string) {
   
    try {
        const res = await agent.teacher.single(uuid)
        setitem(res.data)
    } catch (error) {
        toast.error('Xəta baş verdi')
    }
}
 
useEffect(() => {uuid&&fetchTeacher(uuid)}, [uuid])

    return (
        <section className={styles.modulebody}>
            <header>
               <div className={styles.header}>
                   {item?.avatar? <img src={baseImageUrl+item.avatar} alt="" />: <label className="avatar">{item?.firstName[0]+' '+ item?.lastName[0]}</label>}
              
                <div>
                    <p>{item?.firstName+' '+ item?.lastName} <span>{item?.rating}</span> <StarSVG/></p>
                    <p><span className={styles.users}><UsersSVG/>25 izləyici</span>
                    <span className={styles.location}><LocationSVG/>Azərbaycan</span></p>
               </div>
               </div>
               <div className={styles.buttonArea}>
                   {
                       item?.languages?.map(item=>(
                        <button key={item.id}>{item.name}</button>
                       ))
                   }
              </div>
            </header>
            <main>
            <div className={styles.videoLinkArea}>
                {
                    item?.introductionVideoLink?    <iframe
                    id="ytplayerteacher"
                    className={styles.hello}
                    width="100%"
                    height="200"
                    src={item?.introductionVideoLink}
                    frameBorder="0"
                  ></iframe>: <div>video tapılmadı</div>
                }
          
            </div>
            </main>
            <footer onClick={()=>{Router.push('/teacher/'+item?.uuid); dispatch({type:'setModalpassive'})}}>
                <p>Profilə keçid et</p> <img src="/uploads/rightArrow.svg" alt="" />
            </footer>
        </section>
    );
}
 
 
export default UserModalBody;