import Router from 'next/router';
import { useContext } from 'react';
import { baseImageUrl } from '../../../Api/agent';
import { ITeacher } from '../../../Model/DTO';
import { UserContext } from '../../../pages/_app';
import { LocationSVG } from '../../../svg/locationSVG';
import { StarSVG } from '../../../svg/starSVG';
import { UsersSVG } from '../../../svg/usersSVG';
import styles from './index.module.css'
type UserModalBodyProps = {
    item?:ITeacher
}
 
const UserModalBody:React.FC<UserModalBodyProps> = ({item}) => {
    const [data, dispatch] = useContext(UserContext);
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
              <iframe
                id="ytplayerteacher"
                className={styles.hello}
                width="100%"
                height="200"
                src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                frameBorder="0"
              ></iframe>
            </div>
            </main>
            <footer onClick={()=>{Router.push('/teacher/'+item?.uuid); dispatch({type:'setModalpassive'})}}>
                <p>Profilə keçid et</p> <img src="/uploads/rightArrow.svg" alt="" />
            </footer>
        </section>
    );
}
 
 
export default UserModalBody;